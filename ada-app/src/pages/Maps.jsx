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
    const ankaraCoords = { lat: 39.9334, lng: 32.84 };
    map = new window.google.maps.Map(document.getElementById("map"), {
      zoom: 13,
      center: ankaraCoords,
    });

    placesService = new window.google.maps.places.PlacesService(map);

    const hospitalsButton = createButton(
      '<i class="fa-solid fa-circle-h"></i>',
      toggleHospitalMarkers,
      "hospital-button"
    );
    const pharmaciesButton = createButton(
      '<i class="fas fa-prescription-bottle-alt"></i>',
      togglePharmacyMarkers,
      "pharmacies-button"
    );
    const gatheringAreasButton = createButton(
      '<i class="fa-solid fa-tree-city"></i>',
      toggleGatheringMarkers,
      "gathering-areas-button"
    );

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    buttonContainer.appendChild(hospitalsButton);
    buttonContainer.appendChild(pharmaciesButton);
    buttonContainer.appendChild(gatheringAreasButton);
    map.controls[window.google.maps.ControlPosition.LEFT_BOTTOM].push(
      buttonContainer
    );
  }

  function createButton(html, onClick, className) {
    const button = document.createElement("button");
    button.innerHTML = html;
    button.classList.add("map-button");
    button.classList.add(className);
    button.addEventListener("click", onClick);
    return button;
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
      location: { lat: 39.9334, lng: 32.8597 },
      radius: "20000",
      type: "hospital",
    };

    placesService.nearbySearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        results.forEach((place) => {
          const marker = new window.google.maps.Marker({
            position: place.geometry.location,
            map: map,
            title: place.name,
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
      location: { lat: 39.9334, lng: 32.8597 },
      radius: "20000",
      type: "pharmacy",
    };

    placesService.nearbySearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        results.forEach((place) => {
          const marker = new window.google.maps.Marker({
            position: place.geometry.location,
            map: map,
            title: place.name,
          });

          let infowindow; 

          marker.addListener("mouseover", function () {
            infowindow = new window.google.maps.InfoWindow({
                content: `<div style="color: green;"><strong>${place.name}</strong><br>${place.vicinity}</div>`,
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
      location: { lat: 39.9334, lng: 32.8597 },
      radius: "20000",
      types: ["park", "school"],
    };

    placesService.nearbySearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        results.forEach((place) => {
          const marker = new window.google.maps.Marker({
            position: place.geometry.location,
            map: map,
            title: place.name,
          });

          let infowindow; 

          marker.addListener("mouseover", function () {
            infowindow = new window.google.maps.InfoWindow({ 
              content: `<div style="color: green;"><strong>${place.name}</strong><br>${place.vicinity || 'Adres bulunamadı'}</div>`,
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