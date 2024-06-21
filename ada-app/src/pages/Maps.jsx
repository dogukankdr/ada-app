import React, { useEffect } from "react";

function Maps() {
  let map;
  let placesService;
  let hospitalMarkers = [];
  let pharmacyMarkers = [];
  let gatheringMarkers = [];

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyD2M3jbtM4R7aLwUzvQlBlKXRUef4OF43M&callback=initMap&libraries=places`;
    script.defer = true;
    window.initMap = initMap;
    document.body.appendChild(script);

    return () => {
      map = null;
      hospitalMarkers.forEach((marker) => marker.setMap(null));
      pharmacyMarkers.forEach((marker) => marker.setMap(null));
      gatheringMarkers.forEach((marker) => marker.setMap(null));
      hospitalMarkers = [];
      pharmacyMarkers = [];
      gatheringMarkers = [];
    };
  }, []);

  function initMap() {
    const hatayCoords = { lat: 36.5797, lng: 36.1706 };
    map = new window.google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      center: hatayCoords,
    });

    placesService = new window.google.maps.places.PlacesService(map);

    const hospitalsLogo = createLogo(
      'assets/images/hastane-logo.png',
      toggleHospitalMarkers,
      "hospital-logo"
    );
    const pharmaciesLogo = createLogo(
      'assets/images/eczane-logo.png',
      togglePharmacyMarkers,
      "pharmacy-logo"
    );
    const gatheringAreasLogo = createLogo(
      'assets/images/toplanma-logo.png',
      toggleGatheringMarkers,
      "gathering-logo"
    );

    const logoContainer = document.createElement("div");
    logoContainer.classList.add("logo-container");
    logoContainer.appendChild(hospitalsLogo);
    logoContainer.appendChild(pharmaciesLogo);
    logoContainer.appendChild(gatheringAreasLogo);
    map.controls[window.google.maps.ControlPosition.LEFT_BOTTOM].push(
      logoContainer
    );
  }

  function createLogo(src, onClick, className) {
    const logo = document.createElement("img");
    logo.src = src;
    logo.classList.add("map-logo");
    logo.classList.add(className);
    logo.addEventListener("click", onClick);
    logo.style.cursor = 'pointer';
    return logo;
  }

  function toggleHospitalMarkers() {
    if (hospitalMarkers.length === 0) {
      showHospitals();
    } else {
      removeMarkers(hospitalMarkers);
    }
  }

  function togglePharmacyMarkers() {
    if (pharmacyMarkers.length === 0) {
      showPharmacies();
    } else {
      removeMarkers(pharmacyMarkers);
    }
  }

  function toggleGatheringMarkers() {
    if (gatheringMarkers.length === 0) {
      showGatheringAreas();
    } else {
      removeMarkers(gatheringMarkers);
    }
  }

  function showHospitals() {
    const request = {
      location: { lat: 36.5797, lng: 36.1706 },
      radius: "8000",
      type: "hospital",
    };

    placesService.nearbySearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        results.forEach((place) => {
          const marker = new window.google.maps.Marker({
            position: place.geometry.location,
            map: map,
            title: place.name,
            icon: {
              url: 'assets/images/hastane-logo.png',
              scaledSize: new window.google.maps.Size(28, 28),
            },
          });

          let infowindow;

          marker.addListener("mouseover", function () {
            infowindow = new window.google.maps.InfoWindow({
              content: `<div style="color: black;"><strong>${place.name}</strong><br>${place.vicinity}</div>`,
            });
            infowindow.open(map, marker);
          });

          marker.addListener("mouseout", function () {
            infowindow.close();
          });

          hospitalMarkers.push(marker);
        });
      } else {
        console.error("Places service error:", status);
      }
    });
  }

  function showPharmacies() {
    const request = {
      location: { lat: 36.5797, lng: 36.1706 },
      radius: "8000",
      type: "pharmacy",
      
    };

    placesService.nearbySearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        results.forEach((place) => {
          const marker = new window.google.maps.Marker({
            position: place.geometry.location,
            map: map,
            title: place.name,
            icon: {
              url: 'assets/images/eczane-logo.png',
              scaledSize: new window.google.maps.Size(28, 28),
            },
          });

          let infowindow;

          marker.addListener("mouseover", function () {
            infowindow = new window.google.maps.InfoWindow({
              content: `<div style="color: black;"><strong>${place.name}</strong><br>${place.vicinity}</div>`,
            });
            infowindow.open(map, marker);
          });

          marker.addListener("mouseout", function () {
            infowindow.close();
          });

          pharmacyMarkers.push(marker);
        });
      } else {
        console.error("Places service error:", status);
      }
    });
  }

  function showGatheringAreas() {
    const request = {
      location: { lat: 36.5797, lng: 36.1706 },
      radius: "10000",
      types: ["park", "school"],
    };

    placesService.nearbySearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        results.forEach((place) => {
          const marker = new window.google.maps.Marker({
            position: place.geometry.location,
            map: map,
            title: place.name,
            icon: {
              url: 'assets/images/toplanma-logo.png',
              scaledSize: new window.google.maps.Size(28, 28),
            },
          });

          let infowindow;

          marker.addListener("mouseover", function () {
            infowindow = new window.google.maps.InfoWindow({
              content: `<div style="color: black;"><strong>${place.name}</strong><br>${place.vicinity || 'Adres bulunamadı'}</div>`,
            });
            infowindow.open(map, marker);
          });

          marker.addListener("mouseout", function () {
            infowindow.close();
          });

          gatheringMarkers.push(marker);
        });
      } else {
        console.error("Places service error:", status);
      }
    });
  }

  function removeMarkers(markers) {
    markers.forEach((marker) => marker.setMap(null));
    markers = [];
  }

  return (
    <div>
      <div id="map" style={{ height: "804px", width: "100%" }}></div>
    </div>
  );
}

export default Maps;
