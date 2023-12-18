interface IconfirmationEmail {
  firstname: string;
  movieTitle: string;
  moviePoster: string;
  date: string;
  time: string;
  tickets: number;
  qrCode: string;
}

export const confirmationEmail = ({
  firstname, 
  movieTitle, 
  moviePoster, 
  date, 
  time, 
  tickets,
  qrCode}: IconfirmationEmail) => { return `
  <!doctype html>
  <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <title>BRM – Ticket ${movieTitle}</title>
      <style media="all" type="text/css">
        @media only screen and (max-width: 640px) {
          .main p,
          .main td,
          .main span {
            font-size: 16px !important;
          }
        
          .wrapper {
            padding: 8px !important;
          }
        
          .content {
            padding: 0 !important;
          }
        
          .container {
            padding: 0 !important;
            padding-top: 8px !important;
            width: 100% !important;
          }
        
          .main {
            border-left-width: 0 !important;
            border-radius: 0 !important;
            border-right-width: 0 !important;
          }
        }
        @media all {
          .ExternalClass {
            width: 100%;
          }
        
          .ExternalClass,
          .ExternalClass p,
          .ExternalClass span,
          .ExternalClass font,
          .ExternalClass td,
          .ExternalClass div {
            line-height: 100%;
          }
        
          .apple-link a {
            color: inherit !important;
            font-family: inherit !important;
            font-size: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
            text-decoration: none !important;
          }
        
          #MessageViewBody a {
            color: inherit;
            text-decoration: none;
            font-size: inherit;
            font-family: inherit;
            font-weight: inherit;
            line-height: inherit;
          }
        }
      </style>
    </head>
    <body style="font-family: Helvetica, sans-serif; -webkit-font-smoothing: antialiased; font-size: 16px; line-height: 1.3; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background-color: #000; margin: 0; padding: 0;">
      <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #000; width: 100%;" width="100%" bgcolor="#f4f5f6">
        <tr>
          <td style="font-family: Helvetica, sans-serif; font-size: 16px; vertical-align: top;" valign="top">&nbsp;</td>
          <td class="container" style="font-family: Helvetica, sans-serif; font-size: 16px; vertical-align: top; max-width: 600px; padding: 0; padding-top: 24px; width: 600px; margin: 0 auto;" width="600" valign="top">
            <div class="content" style="box-sizing: border-box; display: block; margin: 0 auto; max-width: 600px; padding: 0;">
  
              <!-- START CENTERED WHITE CONTAINER -->
              <span class="preheader" style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;">Récapitulatif de votre réservation.</span>
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background: #171717; border-radius: 16px; width: 100%;" width="100%">
                <!-- START MAIN CONTENT AREA -->
                <tr>
                  <td class="wrapper" style="font-family: Helvetica, sans-serif; font-size: 16px; vertical-align: top; box-sizing: border-box; padding: 24px;" valign="top">
                    <svg style="margin-bottom: 16px;" width="71" height="17" viewBox="0 0 71 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_712_740)">
                      <path d="M8.31607 16.9999C12.9109 16.9999 16.6321 13.2967 16.6321 8.73529C16.6321 4.17384 12.9109 0.46582 8.31607 0.46582C3.72126 0.46582 0 4.16403 0 8.73039C0 13.2967 3.72619 16.995 8.31607 16.995" fill="#FC4B20"/>
                      <path d="M16.6374 16.9999C21.2322 16.9999 24.9534 13.2967 24.9534 8.73529C24.9534 4.17384 21.2322 0.46582 16.6374 0.46582C12.0425 0.46582 8.32129 4.16894 8.32129 8.73529C8.32129 13.3017 12.0475 16.9999 16.6374 16.9999Z" fill="#111111"/>
                      <path d="M25.4518 16.9999C30.0466 16.9999 33.7728 13.2967 33.7728 8.73529C33.7728 4.17384 30.0417 0.46582 25.4518 0.46582C20.8619 0.46582 17.1357 4.16894 17.1357 8.73529C17.1357 13.3017 20.8619 16.9999 25.4518 16.9999Z" fill="#FC4B20"/>
                      <path d="M38.8164 17V0H42.7252C43.5247 0 44.0923 0.0392383 44.418 0.11281C46.2244 0.529717 47.1226 1.8393 47.1226 4.04645C47.1226 5.9397 46.2145 7.21985 44.4032 7.89671C46.4563 8.34305 47.4878 9.73601 47.4878 12.0707C47.4878 13.0026 47.325 13.8413 46.9943 14.5917C46.6636 15.3422 46.1997 15.9308 45.5976 16.3526C45.0892 16.7106 44.5069 16.9166 43.8554 16.9755C43.5988 16.9902 43.2977 17 42.9522 17H38.8164ZM41.901 6.65089C42.587 6.64108 43.0559 6.5577 43.3026 6.40075C43.811 6.09175 44.0676 5.47375 44.0676 4.54674C44.0676 3.75216 43.9294 3.1783 43.6531 2.83006C43.4013 2.53087 42.9769 2.38373 42.3748 2.38373C42.2514 2.38373 42.0885 2.39354 41.901 2.40825V6.65089ZM41.901 14.3956C42.2366 14.4054 42.4587 14.4103 42.5771 14.4103C43.12 14.4103 43.5001 14.2631 43.7172 13.9737C44.0578 13.5176 44.2305 12.7917 44.2305 11.796C44.2305 10.5355 43.9196 9.76053 43.3026 9.48096C43.0608 9.37305 42.592 9.3191 41.901 9.3191V14.4005V14.3956Z" fill="#FC4B20"/>
                      <path d="M49.1953 17V0H52.9906C56.322 0 57.9901 1.54501 57.9901 4.63503C57.9901 6.62147 57.3584 8.04876 56.0999 8.91691L57.9309 17H54.8117L53.2966 9.56434H52.4428V17H49.1953ZM52.4428 7.31304H52.882C53.5088 7.31304 53.953 7.18061 54.2096 6.91575C54.6193 6.49885 54.8216 5.79256 54.8216 4.78707C54.8216 3.85516 54.6045 3.20283 54.1701 2.82025C53.8938 2.58973 53.4743 2.47201 52.9067 2.47201H52.4428V7.30814V7.31304Z" fill="#FC4B20"/>
                      <path d="M59.5449 17V0H63.7795L65.2847 8.8041L66.7653 0H70.9999V17H68.093V4.06117L65.8474 17H64.0805L62.0274 4.06117V17H59.5449Z" fill="#FC4B20"/>
                      </g>
                      <defs>
                      <clipPath id="clip0_712_740">
                      <rect width="71" height="17" fill="white"/>
                      </clipPath>
                      </defs>
                    </svg>                      
                    <p style="color: #F4F4F4; font-family: Helvetica, sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 16px;">
                      Bonjour ${firstname},
                    </p>
                    <p style="color: #F4F4F4; font-family: Helvetica, sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 8px;">
                      Merci d’avoir réservé une séance de cinéma chez Brussels Rooftop Movies pour le film ${movieTitle} le ${date} à ${time}.
                    </p>
                    <p style="color: #F4F4F4; font-family: Helvetica, sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 24px;">
                      Retrouvez ci-dessous votre ticket. Ne l'oubliez pas le jour de la séance!
                    </p>
                    
                    <!-- START TICKET -->
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; box-sizing: border-box; width: 100%; min-width: 100%;" width="100%">
                      <tbody>
                        <tr>
                          <td align="left" style="font-family: Helvetica, sans-serif; font-size: 16px; vertical-align: top; padding-bottom: 16px;" valign="top">
                            <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: auto;">
                              <tbody>
                                <tr>
                                  <td style="vertical-align: top; border-radius: 15px; text-align: center; width: 100%" valign="top" align="center" width="100%">
                                    <img src="${moviePoster}" alt="Akira" style="border-radius: 15px; width: 100%; max-width: 100%">
                                  </td>
                                </tr>

                                <tr>
                                  <td style="font-family: Helvetica, sans-serif; font-size: 16px; vertical-align: top; border-radius: 15px; padding: 30px;" valign="top" align="left" bgcolor="#F4F4F4" width="65%">
                                    <table width="100%">
                                      <tr width="100%">
                                        <td width="50%">Film: <b>${movieTitle}</b></td>
                                        <td width="50%">Date: <b>${date}</b></td>
                                      </tr>
                                      <tr>
                                        <td width="50%">Entrées: <b>${tickets}</b></td>
                                        <td width="50%">Heure: <b>${time}</b></td>
                                      </tr>
                                    </table>
                                    <img style="padding-top: 20px; width: auto;" src="${qrCode}" alt="Akira">
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <!-- END TICKET -->

                  </td>
                </tr>
                <!-- END MAIN CONTENT AREA -->
              </table>
  
              <!-- START FOOTER -->
              <div class="footer" style="clear: both; padding-top: 24px; text-align: center; width: 100%;">
                <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
                  <tr>
                    <td class="content-block" style="font-family: Helvetica, sans-serif; vertical-align: top; color: #575757; font-size: 16px; text-align: center; padding-bottom: 32px" valign="top" align="center">
                      Copyright Brussels Rooftop Movies. <br/>
                      Av. Adolphe Buyl 345, 1050 Ixelles, Bruxelles, BE. <br/>
                      info@br.movies <br/>
                    </td>
                  </tr>
                </table>
              </div>
  
              <!-- END FOOTER -->
              
              <!-- END CENTERED WHITE CONTAINER --></div>
          </td>
          <td style="font-family: Helvetica, sans-serif; font-size: 16px; vertical-align: top;" valign="top">&nbsp;</td>
        </tr>
      </table>
    </body>
  </html>
`}