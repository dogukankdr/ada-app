const AboutComponent = ({onclickLog}) => {
    return(
        <>
              <div className="about_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-md-6">
                  <div className="about_img">
                    <img src="assets/images/adalogo.jpg" />
                    </div>
               </div>
               <div className="col-md-6">
                  <div className="about_text_main">
                     <h1 className="about_taital">Hakkımızda</h1>
                     <p className="about_text">Ankara Medipol Üniversitesi, Bilgisayar Programcılığı bitirme projesi "ADA" (Acil Durum Asistanı") </p>
                     <div className="readmore_bt"><a href="/about">Devamı...</a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
        </>
    )
}

export default AboutComponent;