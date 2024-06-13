import React from "react";
import { useState } from "react";

function EducationComponent() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div className="afet-container">
      <div className="afet-section">
        <div className="afet-image">
          <img src="assets/images/deprem-logo.png" alt="Afet Resmi" />
        </div>
        <h2>Doğal afet durumunda neler yapmalıyız?</h2>
        <p>
          Dünya genelindeki doğal afetlere bakınca çoğunun meteorolojik afetler
          olduğu görülüyor. Doğal afetlerin görülme sıklığı ve önemi ülkeden
          ülkeye değişiyor. Ülkemizde ise en sık görülen doğal afetlerin başında
          dolu, sel, taşkın, don, orman yangınları, kuraklık, yıldırım, çığ,
          kar, fırtına ve deprem geliyor.
        </p>
        <p>
          Doğal afetlerden korunmak ve hayatta kalmak için bilinçli olmak ve
          panik yapmadan en doğru kararı vererek hareket etmek çok önemli. Hem
          afetlerden önce hem sonra nasıl davranacağımızı bilirsek kayıplarımızı
          en aza indirebiliriz.
        </p>
        <p>
          Peki, can ve mal kaybına neden olabilecek afetlerde nasıl
          davranmalıyız? Yangın, deprem, sel, tsunami gibi doğal afetler
          esnasında neler yapabileceğimize yakından bakalım.
        </p>
      </div>

      <div className="afet-section">
        <div className="afet-image2">
          <img src="assets/images/deprem-logo2.png" alt="Afet Resmi2" />
        </div>
        <h2>Depremden korunma yolları</h2>
        <p>
          Dünyanın en etkin fay hatlarından biri olan Akdeniz-Alp-Himalaya
          kuşağında bulunan Türkiye, sıklıkla yıkıcı depremlerle karşı karşıya
          kalıyor. Deprem her ne kadar bizim dışımızda meydana gelen bir doğal
          afet olsa da önlemlerimizi alıp etkisini azaltmamız mümkün.
        </p>
        <h1>Depremden Önce:</h1>
        <ul>
          <li>
            • Kitaplık gibi deprem sırasında devrilebilecek tüm eşyaları önceden
            mutlaka duvara sabitleyin.
          </li>
          <li>
            • Yatağınızın üzerinde ya da yanında devrilme, düşme riski olan eşya
            bulundurmayın.
          </li>
          <li>
            •{" "}
            <button className="education-link" onClick={toggleModal}>
              <i className="fa-solid fa-up-right-from-square"></i>Deprem çantası
            </button>{" "}
            hazırlamalısınız.
          </li>
          <li>• Periyodik aralıklarla deprem tatbikatı yapılmalı.</li>
          <li>• Zorunlu Deprem Sigortası (DASK) mutlaka yaptırılmalı.</li>

          <h1>Deprem esnasında:</h1>
          <ul>
            <li>
              • Deprem başladığında herhangi bir kapalı alandaysanız mutlaka
              çök-kapan-tutun pozisyonuna geçmelisiniz. Ortamdaki en sağlam
              eşyanın yanına çömelip başınızı ve boynunuzu ellerinizle koruyun.
            </li>
            <li>• Mümkünse elektrik, su ve doğalgaz vanalarını kapatın.</li>
            <li>
              • Binadan ayrılırken olası elektrik kesintisine karşı asansör
              yerine merdiven kullanın.
            </li>
            <li>
              • Deprem sırasında açık alandaysanız binalardan, elektrik
              direklerinden ve ağaçlardan uzak durun. Açık ve geniş bir alanda
              yere çömelin ve depremin geçmesini bekleyin.
            </li>
          </ul>
        </ul>
      </div>

      <div className="afet-section">
        <div className="sel-image">
          <img src="assets/images/sel-logo.png" alt="Afet Resmi2" />
        </div>
        <h2>Selden korunma yolları</h2>
        <p>
          Ülkemizde sonuçları itibarıyla en çok karşılaştığımız ve yıkıcı doğal
          afetlerden bir diğeri sel. Çarpık kentleşme, dere yataklarına yapılan
          yerleşim bölgeleri selden dolayı oluşabilecek riskleri artırıyor.
        </p>

        <h1>Sel öncesinde: </h1>
        <ul>
          <li>• Bölgenizde sel riskini öğrenin.</li>
          <li>• Yerleşiminiz sel riskindeyse taşının.</li>
          <li>• Sel konusundaki uyarıları mutlaka takip edin.</li>
          <li>• Sele karşı mutlaka sigorta yaptırın.</li>
          <li>
            • Sel riskiniz varsa önlem olarak kum, kum torbaları, tahta gibi
            inşaat malzemelerini ve bir alet çantasını hazır tutun.
          </li>
          <div className="sel-image2">
            <img src="assets/images/sel-logo2.png" alt="Afet Resmi2" />
          </div>
          <li>
            • Dere yatağı, ırmak, vadi ve kanyon gibi yerlerden uzak durun.
          </li>
          <li>
            • Şebeke suyu bu tür durumlarda kirlenebilir o nedenle evde temiz su
            bulundurun.
          </li>
          <li>• Sigortaları ve vanaları kapatın.</li>
          <li>• Aracınızı güvenli bir noktaya alın.</li>
        </ul>

        <h1>Sel sırasında:</h1>
        <ul>
          <li>• Yıkılma tehlikesi olan duvarlardan, yapılardan uzak durun.</li>
          <li>
            • Elektrik telleriyle temas edebilecek su birikintilerinden uzak
            durun.
          </li>
          <li>
            • Elektrikli alet kullanmayın. Işık için dahi elektrik yerine pilli
            fener kullanın.
          </li>
          <li>• Hemen yüksek ve güvenli noktalara ulaşmaya çalışın.</li>
          <li>• Araçtaysanız taşkın olan yollardan uzak durun.</li>
          <li>
            • Sel sularına girmeyin ve çocuklarınızı da bu ortamdan uzak tutun.
          </li>
        </ul>
      </div>
      <div className="afet-section">
        <h2>Yangından korunma yolları </h2>
        <h1>Yangın ortamında kaçış yolunuz açık ve güvenli ise,</h1>
        <ul>
          <li>• Panik yapmadan, mümkün olduğunca sakin kalmaya odaklanın.</li>
          <li>
            • Duman solumamak için ıslak havlu veya bez kullanarak burnunuzu
            kapatın.
          </li>
          <div className="yangın-image">
            <img src="assets/images/yangın-logo.png" alt="Afet Resmi" />
          </div>
          <li>
            • Mümkün olan en iyi kaçış yolunu bulmak adına hızlı hareket etmeye
            çalışın. Değerli eşyalarınızı kurtarmak için zaman kaybetmeyin.
          </li>
          <li>
            • Çıkış yolunuzun üzerinde alevlerin bulunup bulunmadığını hızlıca
            kontrol edin.
          </li>
          <li>• Kaçarken asansörü kesinlikle kullanmayın.</li>
          <li>
            • Kaçış sırasında giysilerinizi ıslatarak alev almalarını önlemeye
            çalışın.
          </li>
          <li>
            • Çocukları dışarıya çıkarmak istiyorsanız, yüzlerini nemli bir
            havlu veya bez ile örterek, alevlerin zarar vermesini engelleyin.
          </li>
          <li>
            • Dumanın içinden geçerek kaçmak zorunda kalınırsanız, zeminden
            sürünerek duman katmanını geçin ve acil çıkış yolu ile binayı terk
            edin.
          </li>
          <li>
            • Evden çıkmayı başardıysanız, tekrar içeriye girmeye çalışmayın.
            112 numaralı itfaiye hattını arayarak yetkililerden yardım talep
            edin.
          </li>
          <li>
            • Evinizde kurtarılmayı bekleyen kişiler varsa itfaiye memurlarını
            bilgilendirerek, bulundukları konuma doğru yönlendirin
          </li>
        </ul>

        <h1>Yangın ortamında kaçış yolunuz kapalıysa, </h1>
        <ul>
          <li>
            • Yangın ne kadar korkutucu olursa olsun, mümkün olduğunca sakin
            kalmaya odaklanın.
          </li>
          <li>
            • Saklanmak için alevlerden ve dumandan en az düzeyde etkilenecek
            camlı bir oda seçin.
          </li>
          <li>
            • Dumanın ciğerlerinize girmesini önlemek adına burun deliklerinizi
            nemli bir gömlek, bez veya havlu ile örtün.
          </li>
          <li>
            • Telefonunuzda 112 numaralı itfaiye hattını arayarak yetkililerden
            yardım talep edin.
          </li>
          <li>
            • Telefonunuza ulaşamıyorsanız, bağırarak komşularınızdan veya
            yoldan geçenlerden itfaiyeyi aramalarını isteyin.
          </li>
          <div className="yangın-image">
            <img src="assets/images/yangın-logo2.png" alt="Afet Resmi" />
          </div>
          <li>
            • Ulaşabildiğiniz bir yangın söndürücünüz varsa, vakit kaybetmeden
            kullanın. Ancak yangını kontrol altına alamıyorsanız, fazla ısrarcı
            davranmayın.
          </li>
          <li>
            • Kapınızı kontrol ederek ısınıp ısınmadığını veya duman gelip
            gelmediğini belirleyin. Duman geliyorsa kapıyı açmayın.
          </li>
          <li>
            • Duman girişini önlemek için oda kapısının altına; halı, kilim
            yastık, yorgan gibi malzemeleri ıslatarak yerleştirin.
          </li>
          <li>
            • Daire kapınızın kolunu veya kapı yüzeyini kontrol edin. Sıcak
            olduğunu fark ederseniz, kapıyı açmamaya özen gösterin.
          </li>
          <li>
            • Mümkünse kapınızı ıslatarak, yangının yaşam alanınıza girmesini
            geciktirin.
          </li>
          <li>
            • Varsa daire içerisindeki havalandırma sistemini veya vantilatör
            gibi araçları kapatarak alevlerin hızlıca yayılmasını engelleyin.
          </li>
          <li>
            • Evi terk edinceye kadar alevlerden ve dumandan uzak kalmak için
            zemine yakın bir noktada bulunmaya gayret edin. Hareket etmeniz
            gerekiyorsa yerde sürünmeyi tercih edin.
          </li>
          <li>
            • Banyodaki küveti ve ulaşabildiğiniz her kabı su ile doldurun.
            Depoladığınız su, yardım gelene kadar ihtiyacınız olan yaşamsal
            desteği sağlayacaktır.
          </li>
          <li>
            • Kurtarılmayı beklerken itfaiye memurlarının dikkatini çekmek
            amacıyla pencereden beyaz bir bez parçası sallayın.
          </li>
          <li>
            • Giysileriniz alev alırsa, panik yaparak koşmayın. Yanan
            kıyafetleri hızlıca üzerinizden çıkaramıyorsanız, kendinizi yere
            bırakın ve yuvarlanarak alevleri söndürün.
          </li>
          <li>
            • Bir odadan çıktıktan sonra kapısını mutlaka kapatın. Kapıları
            kapalı tutmanız, bir süreliğine de olsa yangının hızlıca yayılmasına
            engel olacaktır.
          </li>
          <li>
            • Doğal afetler meydana gelmeden önce önlemler almak ve olduğu
            sırada bilinçli bir şekilde hareket etmek hayatımızı kurtarıyor.
            Doğal afetlerle mücadele etmek için daha fazla bilgiye sahip olmak
            istiyorsanız AFAD tarafından verilen Temel Afet Bilinci eğitimlerine
            katılabilirsiniz.
          </li>
        </ul>
      </div>
      {showModal && (
        <div className="modal">
          <div className="education-modal-content">
            <span className="education-modal-close" onClick={toggleModal}>
              &times;
            </span>
            <h2>Deprem Çantasında Neler Olmalı?</h2>
            <ul>
              <p>Deprem çantasının içerisinde olması gerekenler:</p>
              <li>
                • En az 72 saat yetebilecek miktarda su ve bozulmayan yiyecekler
                (konserve, bisküvi vb.)
              </li>
              <li>• İlk yardım çantası</li>
              <li>• Çadır, battaniye ve uyku tulumu</li>
              <li>• Yedek pilleri ile beraber kullanışlı bir el feneri</li>
              <li>• Telefonunuzun şarj aleti (taşınabilir ve kablolu)</li>
              <li>
                • Mevsim şartlarına uygun giysiler (şapka, çorap, yağmurluk,
                kazak vb.)
              </li>
              <li>• Bir miktar para</li>
              <li>• Varsa kullandığınız ilaçlar</li>
              <li>• Kalem ve kağıt</li>
              <li>• Çok amaçlı çakı ve çakmak</li>
              <li>
                • Önemli telefon numaralarının ve iletişime geçilecek kişilerin
                bilgilerinin bulunduğu defter ya da dosya
              </li>
              <li>
                • Islak mendil, tuvalet kağıdı, tuvalet atıkları için poşet gibi
                hijyen ürünleri ve dezenfektan ürünler
              </li>
            </ul>
            <h2>Deprem Çantası Hazırlarken Nelere Dikkat Edilmeli?</h2>
            <p>
              Deprem çantası hazırlamak kadar, “Deprem çantası nasıl olmalı?”
              sorusunun cevabı da oldukça önemlidir. Şimdi, deprem çantası
              hazırlarken dikkat etmeniz gerekenleri sıralayalım.
            </p>
            <ul>
              <li>
                • Hazırladığınız deprem çantası ağır olmamalı, kolaylıkla
                taşınabilir olmalıdır.
              </li>
              <li>
                • Deprem çantasını kolaylıkla ulaşacağınız bir yerde saklamanız
                çok önemlidir. Acil durumda kolaylıkla ulaşamayacağınız bir
                deprem çantası amaca uygun değildir.
              </li>
              <li>
                • Deprem çantasını tüm aileniz için değil, kişisel
                ihtiyaçlarınız doğrultusunda hazırlamalısınız. Ayrıca deprem
                çantasının içindekilerini hazırlarken evcil hayvanınız varsa
                onun ihtiyaçlarına da çantada yer vermeyi unutmamalısınız.
              </li>
              <li>
                • Deprem çantanızı mevsim şartlarına uygun olacak şekilde
                belirli dönemlerde yenilemeyi unutmamalısınız.
              </li>
              <li>
                • Yiyeceklerin ve içeceklerin son kullanma tarihleri konusunda
                dikkatli olmalısınız. Son kullanma tarihleri yakın olan ürünleri
                tüketebilir ve yerlerine yenilerini koyabilirsiniz.
              </li>
              <li>
                • Evin yanı sıra iş yeriniz ve otomobilinizde de deprem çantası
                bulundurmanızda fayda var.
              </li>
            </ul>
            <p>
              Deprem sonrası, hayatınızı kurtarmada büyük bir rol oynayabilecek
              deprem çantasına hemen ulaşmanız gerekir. Bu nedenle deprem
              çantasını kolaylıkla bulabileceğiniz bir yerde tutmanız önemli.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default EducationComponent;
