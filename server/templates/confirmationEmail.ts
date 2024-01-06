interface IconfirmationEmail {
  firstname: string;
  movieTitle: string;
  moviePoster: string;
  date: string;
  time: string;
  tickets: number;
  qrCode: string;
  seats: string;
}

export const confirmationEmail = ({
  firstname, 
  movieTitle, 
  moviePoster, 
  date, 
  time, 
  tickets,
  seats,
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
            padding: 16px !important;
            padding-top: 20px !important;
          }
        
          .container {
            padding: 0px !important;
            padding-top: 10px !important;
            width: 100% !important;
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
          <td class="container" style="font-family: Helvetica, sans-serif; font-size: 16px; vertical-align: top; max-width: 600px; padding: 0; padding-top: 24px; width: 60%; margin: 0 auto;" width="600" valign="top">
            <div class="content" style="box-sizing: border-box; display: block; margin: 0 auto; max-width: 600px; padding: 0;">
  
              <!-- START CENTERED WHITE CONTAINER -->
              <span class="preheader" style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;">Récapitulatif de votre réservation.</span>
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-radius: 16px; width: 100%;" width="100%">
                <!-- START MAIN CONTENT AREA -->
                <tr>
                  <td class="wrapper" style="font-family: Helvetica, sans-serif; font-size: 16px; vertical-align: top; box-sizing: border-box; padding: 24px;" valign="top">
                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.7343 18.48C23.2489 18.8053 22.6409 18.9627 21.9102 18.952C21.1796 18.9413 20.5716 18.7733 20.0863 18.448C19.6009 18.1227 19.2356 17.6667 18.9902 17.08C18.7503 16.4933 18.6302 15.8 18.6302 15C18.6302 14.2 18.7503 13.5013 18.9902 12.904C19.2356 12.3067 19.6009 11.8453 20.0863 11.52C20.5716 11.1947 21.1796 11.0373 21.9102 11.048C22.6409 11.0587 23.2489 11.2267 23.7343 11.552C24.2196 11.8773 24.5823 12.3333 24.8223 12.92C25.0676 13.5067 25.1902 14.2 25.1902 15C25.1902 15.8 25.0676 16.4987 24.8223 17.096C24.5823 17.6933 24.2196 18.1547 23.7343 18.48Z" fill="#FF6422"/>
                      <path d="M8.768 14.824H6.176V11.272H8.768C8.88 11.272 9.00267 11.2773 9.136 11.288C9.26933 11.2987 9.392 11.32 9.504 11.352C9.79733 11.432 10.024 11.568 10.184 11.76C10.344 11.9467 10.4533 12.1573 10.512 12.392C10.576 12.6213 10.608 12.84 10.608 13.048C10.608 13.256 10.576 13.4773 10.512 13.712C10.4533 13.9413 10.344 14.152 10.184 14.344C10.024 14.5307 9.79733 14.664 9.504 14.744C9.392 14.776 9.26933 14.7973 9.136 14.808C9.00267 14.8187 8.88 14.824 8.768 14.824Z" fill="#FF6422"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3 0C1.34315 0 0 1.34315 0 3V32C0 33.6569 1.34315 35 3 35H4V24.24H8.864C8.976 24.24 9.12534 24.2453 9.312 24.256C9.504 24.2613 9.67467 24.2773 9.824 24.304C10.512 24.4107 11.0747 24.6373 11.512 24.984C11.9547 25.3307 12.28 25.768 12.488 26.296C12.696 26.8187 12.8 27.4027 12.8 28.048C12.8 28.6933 12.6933 29.28 12.48 29.808C12.272 30.3307 11.9467 30.7653 11.504 31.112C11.0667 31.4587 10.5067 31.6853 9.824 31.792C9.67467 31.8133 9.504 31.8293 9.312 31.84C9.12 31.8507 8.97066 31.856 8.864 31.856H6.176V35H16.4322L19.72 24.24H22.968L26.2558 35H32C33.6569 35 35 33.6569 35 32V3C35 1.34315 33.6569 0 32 0H3ZM18.9262 20.248C19.7636 20.7493 20.7582 21 21.9102 21C23.0622 21 24.0543 20.7493 24.8862 20.248C25.7236 19.7467 26.3662 19.0453 26.8142 18.144C27.2676 17.2427 27.4942 16.1947 27.4942 15C27.4942 13.8053 27.2676 12.7573 26.8142 11.856C26.3662 10.9547 25.7236 10.2533 24.8862 9.752C24.0543 9.25067 23.0622 9 21.9102 9C20.7582 9 19.7636 9.25067 18.9262 9.752C18.0942 10.2533 17.4516 10.9547 16.9982 11.856C16.5502 12.7573 16.3262 13.8053 16.3262 15C16.3262 16.1947 16.5502 17.2427 16.9982 18.144C17.4516 19.0453 18.0942 19.7467 18.9262 20.248ZM4 9.24V20.76H6.176V16.856H8.864C8.97066 16.856 9.12 16.8507 9.312 16.84C9.504 16.8293 9.67467 16.8133 9.824 16.792C10.5067 16.6853 11.0667 16.4587 11.504 16.112C11.9467 15.7653 12.272 15.3307 12.48 14.808C12.6933 14.28 12.8 13.6933 12.8 13.048C12.8 12.4027 12.696 11.8187 12.488 11.296C12.28 10.768 11.9547 10.3307 11.512 9.984C11.0747 9.63733 10.512 9.41067 9.824 9.304C9.67467 9.27733 9.504 9.26133 9.312 9.256C9.12534 9.24533 8.976 9.24 8.864 9.24H4Z" fill="#FF6422"/>
                      <path d="M24.0134 35L23.5072 33.36H19.1694L18.671 35H24.0134Z" fill="#FF6422"/>
                      <path d="M6.176 29.824H8.768C8.88 29.824 9.00267 29.8187 9.136 29.808C9.26933 29.7973 9.392 29.776 9.504 29.744C9.79733 29.664 10.024 29.5307 10.184 29.344C10.344 29.152 10.4533 28.9413 10.512 28.712C10.576 28.4773 10.608 28.256 10.608 28.048C10.608 27.84 10.576 27.6213 10.512 27.392C10.4533 27.1573 10.344 26.9467 10.184 26.76C10.024 26.568 9.79733 26.432 9.504 26.352C9.392 26.32 9.26933 26.2987 9.136 26.288C9.00267 26.2773 8.88 26.272 8.768 26.272H6.176V29.824Z" fill="#FF6422"/>
                      <path d="M22.88 31.328L21.3216 26.2791L19.787 31.328H22.88Z" fill="#FF6422"/>
                    </svg>                      
                    <p style="color: #F4F4F4; font-family: Helvetica, sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 16px; margin-top: 16px;">
                      Bonjour ${firstname},
                    </p>
                    <p style="color: #F4F4F4; font-family: Helvetica, sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 8px;">
                      Merci d’avoir réservé une séance de cinéma chez Popcorn Palace pour le film ${movieTitle} le ${date} à ${time}.
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
                                  <td style="font-family: Helvetica, sans-serif; font-size: 16px; vertical-align: top; border-radius: 8px; padding: 12px; border: 1px #232323 solid" valign="top" align="left" bgcolor="#161616" width="65%">
                                    <table width="100%">
                                      <tr>
                                        <td style="vertical-align: top; border-radius: 15px; text-align: center; width: 100%" valign="top" align="center" width="100%">
                                          <img src="${moviePoster}" alt="${movieTitle}" style="border-radius: 5px; width: 100%; max-width: 100%; margin-bottom: 8px;">
                                        </td>
                                      </tr>
                                      <tr width="100%">
                                        <td style="color: #ffffff">Film: <b>${movieTitle}</b></td>
                                      </tr>
                                      <tr width="100%">
                                        <td style="color: #ffffff">Date: <b>${date}</b> Heure: <b>${time}</b></td>
                                      </tr>
                                      <tr>
                                        <td style="color: #ffffff">Entrées: <b>${tickets}</b></td>
                                      </tr>
                                      <tr>
                                        <td style="color: #ffffff">Places: <b>${seats}</b></td>
                                      </tr>
                                    </table>
                                    <img style="padding-top: 20px; padding-left: 5px; width: 150px;" src="${qrCode}" alt="QR Code">
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

              <!-- END CENTERED WHITE CONTAINER --></div>
          </td>
        </tr>
      </table>
    </body>
  </html>
`}