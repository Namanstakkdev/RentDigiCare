exports.get = (emailFor, data) => {
  const domain = process.env.DOMAIN;
  const rentdigicareDomain =
    process.env.RENTDIGICARE_DOMAIN + ":" + process.env.PORT;

  const rentdigicareWebsite = process.env.RENTDIGICARE_DOMAIN;
  const serverAddress =
    process.env.RENTDIGICARE_DOMAIN + ":" + process.env.PORT;
  const gskLogo = `${rentdigicareDomain}/images/gsklogo.png`;
  const gskLogo1 = `${rentdigicareDomain}/images/gsklogo1.jpg`;
  const rentdigicareLogo = `${rentdigicareDomain}/images/rentdigicarelogo.png`;
  const greyshape = `https://rdclive.nyc3.cdn.digitaloceanspaces.com/grey-shape-2.png`;
  const emailIcon = `https://rdclive.nyc3.cdn.digitaloceanspaces.com/email-icon.png`;

  // website domain

  function getStatusColor(status) {
    switch (status) {
      case "Open":
        return "#0000ff"; // Blue
      case "Inprogress":
        return "#ffff00"; // Yellow
      case "Completed":
        return "#00ff00"; // Green
      case "Unresolved":
        return "#ff0000"; // Red
      case "Pending":
        return "#dbd3cd"; // Default color
      default:
        return "#dbd3cd"; // Default color
    }
  }

  const gskDomain = process.env.GSK_DOMAIN;

  if (emailFor === "ADD_COMPANY") {
    return `
            <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
            <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" style="width:100%;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"> 
 <head> 
  <meta charset="UTF-8"> 
  <meta content="width=device-width, initial-scale=1" name="viewport"> 
  <meta name="x-apple-disable-message-reformatting"> 
  <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
  <meta content="telephone=no" name="format-detection"> 
  <title>New email template 2022-06-24</title><!--[if (mso 16)]>
    <style type="text/css">
    a {text-decoration: none;}
    </style>
    <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
<xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG></o:AllowPNG>
    <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
</xml>
<![endif]--><!--[if !mso]><!-- --> 
  <link href="https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i" rel="stylesheet"><!--<![endif]--> 
  <style type="text/css">
#outlook a {
\tpadding:0;
}
.ExternalClass {
\twidth:100%;
}
.ExternalClass,
.ExternalClass p,
.ExternalClass span,
.ExternalClass font,
.ExternalClass td,
.ExternalClass div {
\tline-height:100%;
}
.es-button {
\tmso-style-priority:100!important;
\ttext-decoration:none!important;
\ttransition:all 100ms ease-in;
}
a[x-apple-data-detectors] {
\tcolor:inherit!important;
\ttext-decoration:none!important;
\tfont-size:inherit!important;
\tfont-family:inherit!important;
\tfont-weight:inherit!important;
\tline-height:inherit!important;
}
.es-button:hover {
\tbackground:#555555!important;
\tborder-color:#555555!important;
}
.es-desk-hidden {
\tdisplay:none;
\tfloat:left;
\toverflow:hidden;
\twidth:0;
\tmax-height:0;
\tline-height:0;
\tmso-hide:all;
}
[data-ogsb] .es-button {
\tborder-width:0!important;
\tpadding:15px 30px 15px 30px!important;
}
[data-ogsb] .es-button.es-button-1 {
\tpadding:15px 25px!important;
}
@media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120%!important } h1 { font-size:30px!important; text-align:center } h2 { font-size:26px!important; text-align:left } h3 { font-size:20px!important; text-align:left } h1 a { text-align:center } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:30px!important } h2 a { text-align:left } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:20px!important } h3 a { text-align:left } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:17px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:17px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } a.es-button, button.es-button { font-size:14px!important; display:inline-block!important; border-width:15px 25px 15px 25px!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important } }
</style> 
 </head> 
 <body style="width:100%;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"> 
  <div class="es-wrapper-color" style="background-color:#F1F1F1"><!--[if gte mso 9]>
\t\t\t<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
\t\t\t\t<v:fill type="tile" color="#f1f1f1"></v:fill>
\t\t\t</v:background>
\t\t<![endif]--> 
   <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top"> 
     <tr style="border-collapse:collapse"> 
      <td valign="top" style="padding:0;Margin:0"> 
     
       <table cellpadding="0" cellspacing="0" class="es-header" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-header-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> 
             <tr style="border-collapse:collapse"> 
              <td style="Margin:0;padding-top:30px;padding-bottom:30px;padding-left:40px;padding-right:40px;background-color:#ffffff" bgcolor="#333333" align="left"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;font-size:0; "><a href="${rentdigicareDomain}" target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#FFFFFF;font-size:14px"><img src="${rentdigicareLogo}" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; height:76px;weight:150px" ></a></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#333333;width:600px" cellspacing="0" cellpadding="0" bgcolor="#333333" align="center"> 
             <tr style="border-collapse:collapse"> 
              <td style="Margin:0;padding-top:10px;padding-bottom:40px;padding-left:40px;opacity:1;padding-right:40px;background-image:url('https://jlbcxs.stripocdn.email/content/guids/CABINET_85e4431b39e3c4492fca561009cef9b5/images/93491522393929597.png');background-repeat:no-repeat" align="left" background="https://jlbcxs.stripocdn.email/content/guids/CABINET_85e4431b39e3c4492fca561009cef9b5/images/93491522393929597.png"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-bottom:10px;padding-top:40px"><h1 style="Margin:0;line-height:36px;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;font-size:30px;font-style:normal;font-weight:bold;color:#ffffff">WELCOME!</h1></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td esdev-links-color="#757575" align="center" style="Margin:0;padding-top:10px;padding-bottom:20px;padding-left:30px;padding-right:30px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#fffbfb;font-size:15px">A new account has been created for you at 'Rentdigicare'
                        and you have been issued with a new temporary password.</p></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:20px"><span class="es-button-border" style="border-style:solid;border-color:#26a4d3;background:none 0% 0% repeat scroll #26a4d3;border-width:0px;display:inline-block;border-radius:50px;width:auto"><a href="${domain}/login" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;transition:all 100ms ease-in;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:14px;border-style:solid;border-color:#26a4d3;border-width:15px 30px 15px 30px;display:inline-block;background:#26a4d3;border-radius:50px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:bold;font-style:normal;line-height:17px;width:auto;text-align:center">ACCESS ACCOUNT</a></span></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px"> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="padding:0;Margin:0;padding-top:40px;padding-left:40px;padding-right:40px"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                    <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-bottom:10px; padding-top:15px;"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#000000;font-size:15px">Dear, ${data.owner}</p></td>                       
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td class="es-m-txt-c" align="left" style="padding:0;Margin:0;padding-top:5px;padding-bottom:15px"><h2 style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;font-size:20px;font-style:normal;font-weight:bold;color:#333333">Your current login information is:</h2></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td class="es-m-txt-c" align="left" style="padding:0;margin-top:15px; margin-bottom:15px; height: 1px; background: #ddd; "></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-bottom:10px; padding-top:15px;"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px"><strong>Email:</strong> ${data.email}<br><strong>Password:</strong> ${data.password} <br>(Kindly change your passowrd after you login the first time.)</p></td>                       
                     </tr> 
                     <!-- <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-bottom:10px; "><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px"><strong>Password:</strong> password@123 <br>(Kindly change your passowrd after you login the first time.)</p></td> 
                     </tr> -->
                     <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-bottom:10px; "><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;text-align: justify;color:#555555;font-size:15px">If the above "ACCESS ACCOUNT" button does not work then click on the below given link:<br><a href="${domain}/Login">${domain}/Login</a></p></td> 
                     </tr> 
                     <!-- <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">If that doesn't work, copy and paste the following link in your browser:<br></p></td> 
                     </tr>
\t\t\t\t\t<tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p href="${domain}/login" style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">${domain}/login<br></p></td> 
                     </tr>\t\t\t\t\t  -->
                     <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">Cheers,<br><strong>Team Rentdigicare</strong></p></td> 
                     </tr> 
                     <!-- <tr style="border-collapse:collapse margin-top: 20px"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px"><strong>Rentdigicare</strong></p></td> 
                     </tr>  -->
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
             
           </table></td> 
         </tr> 
       </table> 
     
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#292828;width:600px" cellspacing="0" cellpadding="0" bgcolor="#292828" align="center"> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="Margin:0;padding-top:30px;padding-bottom:30px;padding-left:40px;padding-right:40px"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;font-size:0"> 
                       <table class="es-table-not-adapt es-social" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                         <tr style="border-collapse:collapse"> 
                          <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px">
                              <a href="https://www.facebook.com/Rentdigi/"><img title="Facebook" src="https://jlbcxs.stripocdn.email/content/assets/img/social-icons/circle-white/facebook-circle-white.png" alt="Fb" width="24" height="24" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>                         
                          <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px">
                              <a href="https://www.instagram.com/rentdigi/"><img title="Instagram" src="https://jlbcxs.stripocdn.email/content/assets/img/social-icons/circle-white/instagram-circle-white.png" alt="Inst" width="24" height="24" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td> 
                         </tr>
                       </table></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       <table cellpadding="0" cellspacing="0" class="es-footer" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-footer-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="Margin:0;padding-top:40px;padding-bottom:40px;padding-left:40px;padding-right:40px"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                    
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:18px;color:#666666;font-size:12px"> <a target="_blank" class="unsubscribe" href="#" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#666666;font-size:12px">Unsubscribe</a></p></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:18px;color:#666666;font-size:12px">Copyright © 2022 - All Rights Reserved.</p></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       </td> 
     </tr> 
   </table> 
  </div>  
 </body>
</html>
    `;
  }

  if (emailFor === "ADD_PROPERTY_MANAGER") {
    return `
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" style="width:100%;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"> 
 <head> 
  <meta charset="UTF-8"> 
  <meta content="width=device-width, initial-scale=1" name="viewport"> 
  <meta name="x-apple-disable-message-reformatting"> 
  <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
  <meta content="telephone=no" name="format-detection"> 
  <title>New email template 2022-06-24</title><!--[if (mso 16)]>
    <style type="text/css">
    a {text-decoration: none;}
    </style>
    <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
<xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG></o:AllowPNG>
    <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
</xml>
<![endif]--><!--[if !mso]><!-- --> 
  <link href="https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i" rel="stylesheet"><!--<![endif]--> 
  <style type="text/css">
#outlook a {
\tpadding:0;
}
.ExternalClass {
\twidth:100%;
}
.ExternalClass,
.ExternalClass p,
.ExternalClass span,
.ExternalClass font,
.ExternalClass td,
.ExternalClass div {
\tline-height:100%;
}
.es-button {
\tmso-style-priority:100!important;
\ttext-decoration:none!important;
\ttransition:all 100ms ease-in;
}
a[x-apple-data-detectors] {
\tcolor:inherit!important;
\ttext-decoration:none!important;
\tfont-size:inherit!important;
\tfont-family:inherit!important;
\tfont-weight:inherit!important;
\tline-height:inherit!important;
}
.es-button:hover {
\tbackground:#555555!important;
\tborder-color:#555555!important;
}
.es-desk-hidden {
\tdisplay:none;
\tfloat:left;
\toverflow:hidden;
\twidth:0;
\tmax-height:0;
\tline-height:0;
\tmso-hide:all;
}
[data-ogsb] .es-button {
\tborder-width:0!important;
\tpadding:15px 30px 15px 30px!important;
}
[data-ogsb] .es-button.es-button-1 {
\tpadding:15px 25px!important;
}
@media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120%!important } h1 { font-size:30px!important; text-align:center } h2 { font-size:26px!important; text-align:left } h3 { font-size:20px!important; text-align:left } h1 a { text-align:center } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:30px!important } h2 a { text-align:left } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:20px!important } h3 a { text-align:left } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:17px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:17px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } a.es-button, button.es-button { font-size:14px!important; display:inline-block!important; border-width:15px 25px 15px 25px!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important } }
</style> 
 </head> 
 <body style="width:100%;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"> 
  <div class="es-wrapper-color" style="background-color:#F1F1F1"><!--[if gte mso 9]>
\t\t\t<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
\t\t\t\t<v:fill type="tile" color="#f1f1f1"></v:fill>
\t\t\t</v:background>
\t\t<![endif]--> 
   <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top"> 
     <tr style="border-collapse:collapse"> 
      <td valign="top" style="padding:0;Margin:0"> 
     
       <table cellpadding="0" cellspacing="0" class="es-header" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-header-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> 
             <tr style="border-collapse:collapse"> 
              <td style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:40px;padding-right:40px;background-color:#ffffff" bgcolor="#333333" align="left"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;font-size:0; "><a href="${gskDomain}" target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#FFFFFF;font-size:14px"><img src="${
      data.logo || rentdigicareLogo
    }" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; height:76px;weight:150px" ></a></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#333333;width:600px" cellspacing="0" cellpadding="0" bgcolor="#333333" align="center"> 
             <tr style="border-collapse:collapse"> 
              <td style="Margin:0;padding-top:10px;padding-bottom:40px;padding-left:40px;opacity:1;padding-right:40px;background-image:url('https://jlbcxs.stripocdn.email/content/guids/CABINET_85e4431b39e3c4492fca561009cef9b5/images/93491522393929597.png');background-repeat:no-repeat" align="left" background="https://jlbcxs.stripocdn.email/content/guids/CABINET_85e4431b39e3c4492fca561009cef9b5/images/93491522393929597.png"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-bottom:10px;padding-top:40px"><h1 style="Margin:0;line-height:36px;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;font-size:30px;font-style:normal;font-weight:bold;color:#ffffff">WELCOME!</h1></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td esdev-links-color="#757575" align="center" style="Margin:0;padding-top:10px;padding-bottom:20px;padding-left:30px;padding-right:30px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#fffbfb;font-size:15px">A new account has been created for you at '${
                        data.companyName
                      }'
                        and you have been issued with a temporary password.</p></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:20px"><span class="es-button-border" style="border-style:solid;border-color:#26a4d3;background:none 0% 0% repeat scroll #26a4d3;border-width:0px;display:inline-block;border-radius:50px;width:auto"><a href="${domain}/login" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;transition:all 100ms ease-in;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:14px;border-style:solid;border-color:#26a4d3;border-width:15px 30px 15px 30px;display:inline-block;background:#26a4d3;border-radius:50px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:bold;font-style:normal;line-height:17px;width:auto;text-align:center">ACCESS ACCOUNT</a></span></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px"> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="padding:0;Margin:0;padding-top:40px;padding-left:40px;padding-right:40px"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                    <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-bottom:10px; padding-top:15px;"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#000000;font-size:15px">Dear, ${
                        data.managerName
                      }</p></td>                       
                     </tr> 
                     <tr style="border-collapse:collapse"> 

                     <tr>
                     <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px"><strong>You have been added as Property Manger to following properties : </strong><br>
                     ${data.properties.toLocaleString()}
                      
                      </p>   
                     </tr>
                    </tr>
                     <tr style="border-collapse:collapse"> 
                      <td class="es-m-txt-c" align="left" style="padding:0;Margin:0;padding-top:5px;padding-bottom:15px"><h2 style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;font-size:20px;font-style:normal;font-weight:bold;color:#333333">Your current login information is:</h2></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td class="es-m-txt-c" align="left" style="padding:0;margin-top:15px; margin-bottom:15px; height: 1px; background: #ddd; "></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-bottom:10px; padding-top:15px;"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px"><strong>Email:</strong> ${
                        data.email
                      }<br><strong>Password:</strong> ${
      data.password
    } <br>(Kindly change your passowrd after you login the first time.)</p></td>                       
                     </tr> 
                     <!-- <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-bottom:10px; "><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px"><strong>Password:</strong> password@123 <br>(Kindly change your passowrd after you login the first time.)</p></td> 
                     </tr> -->
                     <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-bottom:10px; "><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;text-align: justify;color:#555555;font-size:15px">If the above "ACCESS ACCOUNT" button does not work then click on link below:<br><a href="${domain}/Login">${domain}/Login</a></p></td> 
                     </tr> 
                     <tr>
                     <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px"><strong>You have been given following privileges:</strong><br>
                     
                     ${
                       data.privileges.ticketPrivilege
                         ? "Maintenance Request"
                         : ""
                     }<br>
                      ${
                        data.privileges.applicationPrivilege
                          ? "Applications"
                          : ""
                      }<br>
                      ${data.privileges.calendarPrivilege ? "Calendar" : ""}
                      
                      </p>   
                     </tr>
                     <!-- <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">If that doesn't work, copy and paste the following link in your browser:<br></p></td> 
                     </tr>
\t\t\t\t\t<tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p href="${domain}/login" style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">${domain}/login<br></p></td> 
                     </tr>\t\t\t\t\t  -->
                     <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">Cheers,<br><strong>Team ${
                        data.companyName
                      }</strong></p></td> 
                     </tr> 
                     <!-- <tr style="border-collapse:collapse margin-top: 20px"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px"><strong>Rentdigicare</strong></p></td> 
                     </tr>  -->
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
             
           </table></td> 
         </tr> 
       </table> 
     
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#292828;width:600px" cellspacing="0" cellpadding="0" bgcolor="#292828" align="center"> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="Margin:0;padding-top:30px;padding-bottom:30px;padding-left:40px;padding-right:40px"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;font-size:0"> 
                       <table class="es-table-not-adapt es-social" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                         <tr style="border-collapse:collapse"> 
                          <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px">
                            <a href="https://www.facebook.com/gskproperties"><img title="Facebook" src="https://jlbcxs.stripocdn.email/content/assets/img/social-icons/circle-white/facebook-circle-white.png" alt="Fb" width="24" height="24" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td> 
                          <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px">
                            <a href="https://www.instagram.com/gskproperties/"><img title="Instagram" src="https://jlbcxs.stripocdn.email/content/assets/img/social-icons/circle-white/instagram-circle-white.png" alt="Inst" width="24" height="24" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td> 
                         </tr> 
                       </table></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       <table cellpadding="0" cellspacing="0" class="es-footer" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-footer-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="Margin:0;padding-top:40px;padding-bottom:40px;padding-left:40px;padding-right:40px"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                    
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:18px;color:#666666;font-size:12px"> <a target="_blank" class="unsubscribe" href="#" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#666666;font-size:12px">Unsubscribe</a></p></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:18px;color:#666666;font-size:12px">Copyright © 2022 - All Rights Reserved.</p></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       </td> 
     </tr> 
   </table> 
  </div>  
 </body>
</html>
    `;
  }

  if (emailFor === "UPDATE_PROPERTY_MANAGER") {
    return `
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" style="width:100%;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"> 
 <head> 
  <meta charset="UTF-8"> 
  <meta content="width=device-width, initial-scale=1" name="viewport"> 
  <meta name="x-apple-disable-message-reformatting"> 
  <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
  <meta content="telephone=no" name="format-detection"> 
  <title>New email template 2022-06-24</title><!--[if (mso 16)]>
    <style type="text/css">
    a {text-decoration: none;}
    </style>
    <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
<xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG></o:AllowPNG>
    <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
</xml>
<![endif]--><!--[if !mso]><!-- --> 
  <link href="https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i" rel="stylesheet"><!--<![endif]--> 
  <style type="text/css">
#outlook a {
\tpadding:0;
}
.ExternalClass {
\twidth:100%;
}
.ExternalClass,
.ExternalClass p,
.ExternalClass span,
.ExternalClass font,
.ExternalClass td,
.ExternalClass div {
\tline-height:100%;
}
.es-button {
\tmso-style-priority:100!important;
\ttext-decoration:none!important;
\ttransition:all 100ms ease-in;
}
a[x-apple-data-detectors] {
\tcolor:inherit!important;
\ttext-decoration:none!important;
\tfont-size:inherit!important;
\tfont-family:inherit!important;
\tfont-weight:inherit!important;
\tline-height:inherit!important;
}
.es-button:hover {
\tbackground:#555555!important;
\tborder-color:#555555!important;
}
.es-desk-hidden {
\tdisplay:none;
\tfloat:left;
\toverflow:hidden;
\twidth:0;
\tmax-height:0;
\tline-height:0;
\tmso-hide:all;
}
[data-ogsb] .es-button {
\tborder-width:0!important;
\tpadding:15px 30px 15px 30px!important;
}
[data-ogsb] .es-button.es-button-1 {
\tpadding:15px 25px!important;
}
@media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120%!important } h1 { font-size:30px!important; text-align:center } h2 { font-size:26px!important; text-align:left } h3 { font-size:20px!important; text-align:left } h1 a { text-align:center } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:30px!important } h2 a { text-align:left } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:20px!important } h3 a { text-align:left } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:17px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:17px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } a.es-button, button.es-button { font-size:14px!important; display:inline-block!important; border-width:15px 25px 15px 25px!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important } }
</style> 
 </head> 
 <body style="width:100%;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"> 
  <div class="es-wrapper-color" style="background-color:#F1F1F1"><!--[if gte mso 9]>
\t\t\t<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
\t\t\t\t<v:fill type="tile" color="#f1f1f1"></v:fill>
\t\t\t</v:background>
\t\t<![endif]--> 
   <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top"> 
     <tr style="border-collapse:collapse"> 
      <td valign="top" style="padding:0;Margin:0"> 
     
       <table cellpadding="0" cellspacing="0" class="es-header" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-header-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> 
             <tr style="border-collapse:collapse"> 
              <td style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:40px;padding-right:40px;background-color:#ffffff" bgcolor="#333333" align="left"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;font-size:0; "><a href="${gskDomain}" target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#FFFFFF;font-size:14px"><img src="${
      data.logo || rentdigicareLogo
    }" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; height:76px;weight:150px" ></a></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#333333;width:600px" cellspacing="0" cellpadding="0" bgcolor="#333333" align="center"> 
             <tr style="border-collapse:collapse"> 
              <td style="Margin:0;padding-top:10px;padding-bottom:40px;padding-left:40px;opacity:1;padding-right:40px;background-image:url('https://jlbcxs.stripocdn.email/content/guids/CABINET_85e4431b39e3c4492fca561009cef9b5/images/93491522393929597.png');background-repeat:no-repeat" align="left" background="https://jlbcxs.stripocdn.email/content/guids/CABINET_85e4431b39e3c4492fca561009cef9b5/images/93491522393929597.png"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-bottom:10px;padding-top:40px"><h1 style="Margin:0;line-height:36px;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;font-size:30px;font-style:normal;font-weight:bold;color:#ffffff">Update!</h1></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td esdev-links-color="#757575" align="center" style="Margin:0;padding-top:10px;padding-bottom:20px;padding-left:30px;padding-right:30px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#fffbfb;font-size:15px">Your Company '${
                        data.companyName
                      }' has update your privileges.  
                       </p></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:20px"><span class="es-button-border" style="border-style:solid;border-color:#26a4d3;background:none 0% 0% repeat scroll #26a4d3;border-width:0px;display:inline-block;border-radius:50px;width:auto"><a href="${domain}/login" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;transition:all 100ms ease-in;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:14px;border-style:solid;border-color:#26a4d3;border-width:15px 30px 15px 30px;display:inline-block;background:#26a4d3;border-radius:50px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:bold;font-style:normal;line-height:17px;width:auto;text-align:center">ACCESS ACCOUNT</a></span></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px"> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="padding:0;Margin:0;padding-top:40px;padding-left:40px;padding-right:40px"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                    <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-bottom:10px; padding-top:15px;"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#000000;font-size:15px">Dear, ${
                        data.managerName
                      }</p></td>                       
                     </tr> 
               
                  

                     <tr>
                     <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px"><strong>Following privileges have been removed :</strong>  <br>                
                     ${
                       data.privileges.newPrivileges?.ticketPrivilege
                         ? ""
                         : "Maintenance Request <br>"
                     }
                      ${
                        data.privileges.newPrivileges?.applicationPrivilege
                          ? ""
                          : "Applications <br>"
                      }<br>
                      ${
                        data.privileges.newPrivileges?.calendarPrivilege
                          ? ""
                          : "Calendar"
                      }
                      
                      </p>   
                     </tr>
                     </tr>
                     <tr>
                     <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px"><strong>Following privileges have been added :</strong><br>                   
                     ${
                       data.privileges.newPrivileges?.ticketPrivilege
                         ? "Maintenance Request <br>"
                         : ""
                     }
                      ${
                        data.privileges.newPrivileges?.applicationPrivilege
                          ? "Applications <br>"
                          : ""
                      }
                      ${
                        data.privileges.newPrivileges?.calendarPrivilege
                          ? "Calendar"
                          : ""
                      }
                      
                      </p>   
                     </tr>
                     </tr>
                     <tr>

    <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">Please contact your administrator if you have any query.<br></p></td> 
                    
                     
                     <!-- <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">If that doesn't work, copy and paste the following link in your browser:<br></p></td> 
                     </tr>
\t\t\t\t\t<tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p href="${domain}/login" style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">${domain}/login<br></p></td> 
                     </tr>\t\t\t\t\t  -->

                     <tr style="border-collapse:collapse"> 


                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">Cheers,<br><strong>Team ${
                        data.companyName
                      }</strong></p></td> 
                     </tr> 
                     <!-- <tr style="border-collapse:collapse margin-top: 20px"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px"><strong>Rentdigicare</strong></p></td> 
                     </tr>  -->
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
             
           </table></td> 
         </tr> 
       </table> 
     
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#292828;width:600px" cellspacing="0" cellpadding="0" bgcolor="#292828" align="center"> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="Margin:0;padding-top:30px;padding-bottom:30px;padding-left:40px;padding-right:40px"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;font-size:0"> 
                       <table class="es-table-not-adapt es-social" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                         <tr style="border-collapse:collapse"> 
                          <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px">
                            <a href="https://www.facebook.com/gskproperties"><img title="Facebook" src="https://jlbcxs.stripocdn.email/content/assets/img/social-icons/circle-white/facebook-circle-white.png" alt="Fb" width="24" height="24" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td> 
                          <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px">
                            <a href="https://www.instagram.com/gskproperties/"><img title="Instagram" src="https://jlbcxs.stripocdn.email/content/assets/img/social-icons/circle-white/instagram-circle-white.png" alt="Inst" width="24" height="24" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td> 
                         </tr> 
                       </table></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       <table cellpadding="0" cellspacing="0" class="es-footer" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-footer-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="Margin:0;padding-top:40px;padding-bottom:40px;padding-left:40px;padding-right:40px"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                    
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:18px;color:#666666;font-size:12px"> <a target="_blank" class="unsubscribe" href="#" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#666666;font-size:12px">Unsubscribe</a></p></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:18px;color:#666666;font-size:12px">Copyright © 2022 - All Rights Reserved.</p></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       </td> 
     </tr> 
   </table> 
  </div>  
 </body>
</html>
    `;
  }
  if (emailFor === "ADD_PROPERTY_VENDOR" || emailFor === "ADD_CUSTOMER") {
    return `
    <!DOCTYPE html>
    <html>
    <head>
    <title>Add Property Vendor</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <style>
    body {
        margin: 0;
    }
    </style>
    </head>
    <body>
    <div class="email-tempate" style="margin: 50px 0;">
      <div class="email-inner" style="width:100%; max-width:760px; margin:0 auto;border: 1px solid #f1f1f1; background-color: #F7F7F7;position:relative;">
        <div class="em-bg" style="background-color: #030234; height: 510px; position: absolute; left: 0; right: 0; top: 0; z-index: 0; border-bottom-left-radius: 35px; border-bottom-right-radius: 35px;">
          <table style="width:100%; max-width:100%; margin:0 auto; border-collapse: collapse;position:relative;z-index: 2;">
            <tr>
              <td>
                <table style="width:100%;border-collapse: collapse;">
                  <tr>
                    <td>
                      <table style="width:100%;border-collapse: collapse;">
                        <tr>
                          <td colspan="2" style="padding: 5px 15px; text-align:center">
                            <img style="width: 100%; max-width: 150px;" src="${
                              data.logo || rentdigicareLogo
                            }"/>
                            </a>  
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      
                    </td>
                  </tr>
                </table>
                <table style="width:100%;border-collapse: collapse;background-color:#fff;max-width:600px; margin: 0 auto;border-radius: 10px;">
                                
                  <tr>
                    <td colspan="2" style="padding: 50px 55px 0px; text-align:center;">
                    <!-- <a href="${gskDomain}" target="_blank">
                            <img style="width: 100%; max-width: 150px;" src="${
                              data.logo || rentdigicareLogo
                            }"/>
                            </a>         -->
                                                    <h1 style="color: #030234; font-family: 'Poppins', sans-serif; font-weight: 700; margin: 0 0 25px; font-size: 35px;">WELCOME ${
                                                      data.applicantName
                                                    }!</h1>
                                                    <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family: 'Poppins', sans-serif; line-height:23px;color:#050505;font-size:15px">A new account has been created for you at ${
                                                      data?.companyName
                                                    }
                                                        and you have been issued with a temporary password.</p>
                                                        <span class="es-button-border" style="border-style:solid;border-color:#26a4d3;background:none 0% 0% repeat scroll #26a4d3;border-width:0px;display:inline-block;border-radius:50px;width:auto;margin-top: 5px;"><a href="${domain}/login" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;transition:all 100ms ease-in;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:14px;border-style:solid;border-color:#030234;border-width:15px 30px 15px 30px;display:inline-block;background:#030234;border-radius:50px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:bold;font-style:normal;line-height:17px;width:auto;text-align:center">ACCESS ACCOUNT</a></span>           
    
                      <p style="color: #000000; font-family: 'Poppins', sans-serif; font-weight: 600; margin: 10px 0 25px; font-size: 18px;">Dear ${
                        data?.managerName || ""
                      }</p>
                                          <p style="color: #000000; font-family: 'Poppins', sans-serif; font-weight: 600; margin: 10px 0 0; font-size: 15px;">
                                            <u>Your current login information is:</u>
                                          </p>
                                          
                      
                                          <p style="font-family: 'Poppins', sans-serif; color: #000000; font-size: 15px; max-width: 640px; width: 100%; margin-left: auto; margin-right: auto; margin-bottom: 30px;">
                                            <strong>Email :</strong> ${
                                              data?.email || ""
                                            }</br>
                                            <strong>Password:</strong> ${
                                              data?.password || ""
                                            } </br>
                                            (Kindly change your passowrd after you login the first time.)
                                            <br><br>
                                            If the above "ACCESS ACCOUNT" button does not work then click on link below:
                                            <br>
                                            <a href="${domain}/Login">${domain}/Login</a>
                                          </p>
                                          
    
                      <p style="font-family: 'Poppins', sans-serif; color: #000000; font-size: 15px; max-width: 640px; width: 100%; margin-left: auto; margin-right: auto;">Cheers,</p> 
                      <p style="font-family: 'Poppins', sans-serif; color: #000000; font-size: 15px; max-width: 640px; width: 100%; margin-left: auto; margin-right: auto; margin-bottom: 30px;">Team ${
                        data?.companyName || ""
                      }</p>
                    </td>
                  </tr>
                  
                </table>
                  <table style="width:100%;border-collapse: collapse;background-color:transparent;max-width:600px; margin: 0 auto;border-bottom-left-radius: 10px;border-bottom-right-radius: 10px;">
                                <tr>
                                    <td colspan="2" style="padding: 0px 0px; text-align:center;">
                                        <img style="width: 100%; display:block;" src="${greyshape}"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2" style="padding: 0px 0px; text-align:center;">
                                        <img style="width: 100%; display:block;max-width:130px;    margin: 10px auto 25px;" src="${
                                          data.logo || rentdigicareLogo
                                        }"/>
                                    </td>
                                </tr>
                            </table>
               <table style="width:100%; background-color:transparent;border-collapse: collapse;">
                                <tr>
                                    <td colspan="2" style="padding: 40px 15px; text-align:center;">
                                        <p style="color: #414242; font-size: 15px; font-family: 'Poppins', sans-serif; margin: 15px 0;">©Copyrights 2024 - <a style="font-family: 'Poppins', sans-serif; text-decoration: none; color: #1a1816; font-size: 15px;font-weight: 600;" href="${
                                          data.companyDomain
                                            ? data.companyDomain
                                            : rentdigicareWebsite
                                        }">${
      data.companyDomain ? data.companyDomain : rentdigicareWebsite
    }
</a> - All rights reserved</p>
                                        <p style="color: #414242; font-size: 15px; font-family: 'Poppins', sans-serif; margin: 15px 0;">Don’t like these emails? <a style="font-family: 'Poppins', sans-serif; text-decoration: none; color: #1a1816; font-size: 15px;font-weight: 600;" href="#">Unsubscribe</a> or <a style="font-family: 'Poppins', sans-serif; text-decoration: none; color: #553710; font-size: 15px;font-weight: 600;" href="#">Manage Email Subscriptions</a></p>
                                    </td>
                                </tr>
                            </table>
                        </td> 
                    </tr>
                </table>
            </div>
        </div></div>
    </div>
    </body>
    </html>
`;
  }
  if (emailFor === "ADD_TECHNICAL_STAFF") {
    return `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" style="width:100%;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"> 
<head> 
<meta charset="UTF-8"> 
<meta content="width=device-width, initial-scale=1" name="viewport"> 
<meta name="x-apple-disable-message-reformatting"> 
<meta http-equiv="X-UA-Compatible" content="IE=edge"> 
<meta content="telephone=no" name="format-detection"> 
<title>New email template 2022-06-24</title><!--[if (mso 16)]>
<style type="text/css">
a {text-decoration: none;}
</style>
<![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
<xml>
<o:OfficeDocumentSettings>
<o:AllowPNG></o:AllowPNG>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
<![endif]--><!--[if !mso]><!-- --> 
<link href="https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i" rel="stylesheet"><!--<![endif]--> 
<style type="text/css">
#outlook a {
\tpadding:0;
}
.ExternalClass {
\twidth:100%;
}
.ExternalClass,
.ExternalClass p,
.ExternalClass span,
.ExternalClass font,
.ExternalClass td,
.ExternalClass div {
\tline-height:100%;
}
.es-button {
\tmso-style-priority:100!important;
\ttext-decoration:none!important;
\ttransition:all 100ms ease-in;
}
a[x-apple-data-detectors] {
\tcolor:inherit!important;
\ttext-decoration:none!important;
\tfont-size:inherit!important;
\tfont-family:inherit!important;
\tfont-weight:inherit!important;
\tline-height:inherit!important;
}
.es-button:hover {
\tbackground:#555555!important;
\tborder-color:#555555!important;
}
.es-desk-hidden {
\tdisplay:none;
\tfloat:left;
\toverflow:hidden;
\twidth:0;
\tmax-height:0;
\tline-height:0;
\tmso-hide:all;
}
[data-ogsb] .es-button {
\tborder-width:0!important;
\tpadding:15px 30px 15px 30px!important;
}
[data-ogsb] .es-button.es-button-1 {
\tpadding:15px 25px!important;
}
@media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120%!important } h1 { font-size:30px!important; text-align:center } h2 { font-size:26px!important; text-align:left } h3 { font-size:20px!important; text-align:left } h1 a { text-align:center } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:30px!important } h2 a { text-align:left } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:20px!important } h3 a { text-align:left } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:17px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:17px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } a.es-button, button.es-button { font-size:14px!important; display:inline-block!important; border-width:15px 25px 15px 25px!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important } }
</style> 
</head> 
<body style="width:100%;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"> 
<div class="es-wrapper-color" style="background-color:#F1F1F1"><!--[if gte mso 9]>
\t\t\t<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
\t\t\t\t<v:fill type="tile" color="#f1f1f1"></v:fill>
\t\t\t</v:background>
\t\t<![endif]--> 
<table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top"> 
 <tr style="border-collapse:collapse"> 
  <td valign="top" style="padding:0;Margin:0"> 
 
   <table cellpadding="0" cellspacing="0" class="es-header" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top"> 
     <tr style="border-collapse:collapse"> 
      <td align="center" style="padding:0;Margin:0"> 
       <table class="es-header-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> 
         <tr style="border-collapse:collapse"> 
          <td style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:40px;padding-right:40px;background-color:#ffffff" bgcolor="#333333" align="left"> 
           <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
             <tr style="border-collapse:collapse"> 
              <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
               <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td align="center" style="padding:0;Margin:0;font-size:0; "><a href="${gskDomain}" target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#FFFFFF;font-size:14px"><img src="${
      data.logo || rentdigicareLogo
    }" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; height:76px;weight:150px" ></a></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table></td> 
     </tr> 
   </table> 
   <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
     <tr style="border-collapse:collapse"> 
      <td align="center" style="padding:0;Margin:0"> 
       <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#333333;width:600px" cellspacing="0" cellpadding="0" bgcolor="#333333" align="center"> 
         <tr style="border-collapse:collapse"> 
          <td style="Margin:0;padding-top:10px;padding-bottom:40px;padding-left:40px;opacity:1;padding-right:40px;background-image:url('https://jlbcxs.stripocdn.email/content/guids/CABINET_85e4431b39e3c4492fca561009cef9b5/images/93491522393929597.png');background-repeat:no-repeat" align="left" background="https://jlbcxs.stripocdn.email/content/guids/CABINET_85e4431b39e3c4492fca561009cef9b5/images/93491522393929597.png"> 
           <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
             <tr style="border-collapse:collapse"> 
              <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
               <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td align="center" style="padding:0;Margin:0;padding-bottom:10px;padding-top:40px"><h1 style="Margin:0;line-height:36px;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;font-size:30px;font-style:normal;font-weight:bold;color:#ffffff">WELCOME!</h1></td> 
                 </tr> 
                 <tr style="border-collapse:collapse"> 
                  <td esdev-links-color="#757575" align="center" style="Margin:0;padding-top:10px;padding-bottom:20px;padding-left:30px;padding-right:30px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#fffbfb;font-size:15px">A new account has been created for you at '${
                    data?.companyName
                  }' for maintenance
                    and you have been issued with a temporary password.</p></td> 
                 </tr> 
                 <tr style="border-collapse:collapse"> 
                  <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:20px"><span class="es-button-border" style="border-style:solid;border-color:#26a4d3;background:none 0% 0% repeat scroll #26a4d3;border-width:0px;display:inline-block;border-radius:50px;width:auto"><a href="${domain}/login" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;transition:all 100ms ease-in;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:14px;border-style:solid;border-color:#26a4d3;border-width:15px 30px 15px 30px;display:inline-block;background:#26a4d3;border-radius:50px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:bold;font-style:normal;line-height:17px;width:auto;text-align:center">ACCESS ACCOUNT</a></span></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table></td> 
     </tr> 
   </table> 
   <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
     <tr style="border-collapse:collapse"> 
      <td align="center" style="padding:0;Margin:0"> 
       <table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px"> 
         <tr style="border-collapse:collapse"> 
          <td align="left" style="padding:0;Margin:0;padding-top:40px;padding-left:40px;padding-right:40px"> 
           <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
             <tr style="border-collapse:collapse"> 
              <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
               <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                <tr style="border-collapse:collapse"> 
                  <td align="left" style="padding:0;Margin:0;padding-bottom:10px; padding-top:15px;"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#000000;font-size:15px">Dear, ${
                    data?.managerName || ""
                  }</p></td>                       
                 </tr> 
                 <tr style="border-collapse:collapse"> 
                  <td class="es-m-txt-c" align="left" style="padding:0;Margin:0;padding-top:5px;padding-bottom:15px"><h2 style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;font-size:20px;font-style:normal;font-weight:bold;color:#333333">Your current login information is:</h2></td> 
                 </tr> 
                 <tr style="border-collapse:collapse"> 
                  <td class="es-m-txt-c" align="left" style="padding:0;margin-top:15px; margin-bottom:15px; height: 1px; background: #ddd; "></td> 
                 </tr> 
                 <tr style="border-collapse:collapse"> 
                  <td align="left" style="padding:0;Margin:0;padding-bottom:10px; padding-top:15px;"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px"><strong>Email:</strong> ${
                    data?.email || ""
                  }<br><strong>Password:</strong> ${
      data?.password || ""
    } <br>(Kindly change your passowrd after you login the first time.)</p></td>                       
                 </tr> 
                 <!-- <tr style="border-collapse:collapse"> 
                  <td align="left" style="padding:0;Margin:0;padding-bottom:10px; "><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px"><strong>Password:</strong> password@123 <br>(Kindly change your passowrd after you login the first time.)</p></td> 
                 </tr> -->
                 <tr style="border-collapse:collapse"> 
                  <td align="left" style="padding:0;Margin:0;padding-bottom:10px; "><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;text-align: justify;color:#555555;font-size:15px">If the above "ACCESS ACCOUNT" button does not work then click on link below:<br><a href="${domain}/Login">${domain}/Login</a></p></td> 
                 </tr> 
                 <!-- <tr style="border-collapse:collapse"> 
                  <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">If that doesn't work, copy and paste the following link in your browser:<br></p></td> 
                 </tr>
\t\t\t\t\t<tr style="border-collapse:collapse"> 
                  <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p href="${domain}/login" style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">${domain}/login<br></p></td> 
                 </tr>\t\t\t\t\t  -->
                 <tr style="border-collapse:collapse"> 
                  <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">Cheers,<br><strong>Team ${
                    data?.companyName || ""
                  }</strong></p></td> 
                 </tr> 
                 <!-- <tr style="border-collapse:collapse margin-top: 20px"> 
                  <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px"><strong>Rentdigicare</strong></p></td> 
                 </tr>  -->
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
         
       </table></td> 
     </tr> 
   </table> 
 
   <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
     <tr style="border-collapse:collapse"> 
      <td align="center" style="padding:0;Margin:0"> 
       <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#292828;width:600px" cellspacing="0" cellpadding="0" bgcolor="#292828" align="center"> 
         <tr style="border-collapse:collapse"> 
          <td align="left" style="Margin:0;padding-top:30px;padding-bottom:30px;padding-left:40px;padding-right:40px"> 
           <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
             <tr style="border-collapse:collapse"> 
              <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
               <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td align="center" style="padding:0;Margin:0;font-size:0"> 
                   <table class="es-table-not-adapt es-social" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px">
                        <a href="https://www.facebook.com/gskproperties"><img title="Facebook" src="https://jlbcxs.stripocdn.email/content/assets/img/social-icons/circle-white/facebook-circle-white.png" alt="Fb" width="24" height="24" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td> 
                      <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px">
                        <a href="https://www.instagram.com/gskproperties/"><img title="Instagram" src="https://jlbcxs.stripocdn.email/content/assets/img/social-icons/circle-white/instagram-circle-white.png" alt="Inst" width="24" height="24" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table></td> 
     </tr> 
   </table> 
   <table cellpadding="0" cellspacing="0" class="es-footer" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top"> 
     <tr style="border-collapse:collapse"> 
      <td align="center" style="padding:0;Margin:0"> 
       <table class="es-footer-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> 
         <tr style="border-collapse:collapse"> 
          <td align="left" style="Margin:0;padding-top:40px;padding-bottom:40px;padding-left:40px;padding-right:40px"> 
           <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
             <tr style="border-collapse:collapse"> 
              <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
               <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                
                 <tr style="border-collapse:collapse"> 
                  <td align="center" style="padding:0;Margin:0;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:18px;color:#666666;font-size:12px"> <a target="_blank" class="unsubscribe" href="#" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#666666;font-size:12px">Unsubscribe</a></p></td> 
                 </tr> 
                 <tr style="border-collapse:collapse"> 
                  <td align="center" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:18px;color:#666666;font-size:12px">Copyright © 2022 - All Rights Reserved.</p></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table></td> 
     </tr> 
   </table> 
   </td> 
 </tr> 
</table> 
</div>  
</body>
</html>
`;
  }

  if (emailFor === "NEW_APPLICATION_MAIL_TO_MANAGER") {
    return `<!DOCTYPE html>
<html>
<head>
<title>NEW_APPLICATION_MAIL_TO_MANAGER</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
<style>
body {
    margin: 0;
}
</style>
</head>
<body>
<div class="email-tempate" style="margin: 50px 0;">
	<div class="email-inner" style="width:100%; max-width:760px; margin:0 auto;border: 1px solid #f1f1f1; background-color: #F7F7F7;position:relative;">
		<div class="em-bg" style="background-color: #F4A442; height: 510px; position: absolute; left: 0; right: 0; top: 0; z-index: 0; border-bottom-left-radius: 35px; border-bottom-right-radius: 35px;">
			<table style="width:100%; max-width:100%; margin:0 auto; border-collapse: collapse;position:relative;z-index: 2;">
				<tr>
					<td>
						<table style="width:100%;border-collapse: collapse;">
							<tr>
								<td>
									<table style="width:100%;border-collapse: collapse;">
										<tr>
											<td colspan="2" style="padding: 5px 15px; text-align:center">
												<img style="width: 100%; max-width: 150px;" src="${data.logo || rentdigicareLogo}"/>
												</a>  
											</td>
										</tr>
									</table>
								</td>
							</tr>
							<tr>
								<td>
									
								</td>
							</tr>
						</table>
						<table style="width:100%;border-collapse: collapse;background-color:#fff;max-width:600px; margin: 0 auto;border-radius: 10px;">
                            
							<tr>
								<td colspan="2" style="padding: 50px 55px 0px; text-align:center;">
                                                <h1 style="color: #B85252; font-family: 'Poppins', sans-serif; font-weight: 700; margin: 0 0 25px; font-size: 25px;">New  Request Received!</h1>
                                                    <span class="es-button-border" style="border-style:solid;border-color:#B85252;background:none 0% 0% repeat scroll #26a4d3;border-width:0px;display:inline-block;border-radius:50px;width:auto;margin-top: 5px;"><a href="${domain}/login" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;transition:all 100ms ease-in;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:14px;border-style:solid;border-color:#B85252;border-width:15px 30px 15px 30px;display:inline-block;background:#B85252;border-radius:50px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:bold;font-style:normal;line-height:17px;width:auto;text-align:center">ACCESS ACCOUNT</a></span>           

									<p style="color: #B85252; font-family: 'Poppins', sans-serif; font-weight: 600; margin: 10px 0 25px; font-size: 18px;">Dear ${data.propertyManager},</p>
                                      <p style="color: #000000; font-family: 'Poppins', sans-serif;  margin: 10px 0 0; font-size: 15px;">
                                        You have received a application from ${data.applicantName} - ${data.applicantEmail} who has shown an interest on ${data.propertyName} Property - ${data.propertyLayout}.<br>
                                      </p>
                                      <p style="color: #B85252; font-family: 'Poppins', sans-serif; font-weight: 600; margin: 10px 0 25px; font-size: 18px;">Details:</p>
                                      
									
                                      <p style="font-family: 'Poppins', sans-serif; color: #000000; font-size: 15px; max-width: 640px; width: 100%; margin-left: auto; margin-right: auto; margin-bottom: 30px;">
                                        <strong style="color: #B85252;">Applicant Name:</strong> ${data.applicantName}</br>
                                        <strong style="color: #B85252;">Property:</strong> ${data.propertyName} </br>
                                        <strong style="color: #B85252;">Layout:</strong> ${data.propertyLayout} </br>
                                        ( Please feel free to contact the customer.)
                                        <br><br>
                                        If the above "ACCESS ACCOUNT" button does not work then click on link below:
                                        <br>
                                        <a style="color: #B85252;font-weight: 600;" href="${domain}/Login">${domain}/Login</a>
                                      </p>
                                      

									<p style="font-family: 'Poppins', sans-serif; color: #000000; font-size: 15px; max-width: 640px; width: 100%; margin-left: auto; margin-right: auto;">Cheers,</p> 
									<p style="font-family: 'Poppins', sans-serif; color: #B85252; font-size: 15px; max-width: 640px; width: 100%; margin-left: auto; margin-right: auto; margin-bottom: 30px;"><strong>Team ${data.companyName}</strong></p>
								</td>
							</tr>
							
						</table>
						  <table style="width:100%;border-collapse: collapse;background-color:transparent;max-width:600px; margin: 0 auto;border-bottom-left-radius: 10px;border-bottom-right-radius: 10px;">
                            <tr>
                                <td colspan="2" style="padding: 0px 0px; text-align:center;">
                                    <img style="width: 100%; display:block;" src="${greyshape}"/>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2" style="padding: 0px 0px; text-align:center;">
                                    <img style="width: 100%; display:block;max-width:130px;    margin: 10px auto 25px;" src="${data.logo || rentdigicareLogo}"/>
                                </td>
                            </tr>
                        </table>
					 <table style="width:100%; background-color:transparent;border-collapse: collapse;">
                            <tr>
                                <td colspan="2" style="padding: 40px 15px; text-align:center;">
                                    <p style="color: #414242; font-size: 15px; font-family: 'Poppins', sans-serif; margin: 15px 0;">©Copyrights 2024 - <a style="font-family: 'Poppins', sans-serif; text-decoration: none; color: #1a1816; font-size: 15px;font-weight: 600;" href="${data.companyDomain}">${data.companyDomain}</a> - All rights reserved</p>
                                    <p style="color: #414242; font-size: 15px; font-family: 'Poppins', sans-serif; margin: 15px 0;">Don’t like these emails? <a style="font-family: 'Poppins', sans-serif; text-decoration: none; color: #1a1816; font-size: 15px;font-weight: 600;" href="#">Unsubscribe</a> or <a style="font-family: 'Poppins', sans-serif; text-decoration: none; color: #553710; font-size: 15px;font-weight: 600;" href="#">Manage Email Subscriptions</a></p>
                                </td>
                            </tr>
                        </table>
                    </td> 
                </tr>
            </table>
        </div>
    </div></div>
</div>
</body>
</html>`;
  }

  if (emailFor === "NEW_TICKET_MAIL_TO_MANAGER") {
    return `<head>
<title>Appointment Reminder</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap" rel="stylesheet">
<style>
body {
    margin: 0;
}
</style>
</head>
<body>
<div class="email-tempate" style="margin: 50px 0;">
	<div class="email-inner" style="width:100%; max-width:760px; margin:0 auto;border: 1px solid #f1f1f1; background-color: #F7F7F7;position:relative;">
		<div class="em-bg" style="background-color: #dbd3cd;height: 510px;position: absolute;left: 0;right: 0;top: 0;z-index: 0;border-bottom-left-radius: 35px;border-bottom-right-radius: 35px;">
			<table style="width:100%; max-width:100%; margin:0 auto; border-collapse: collapse;position:relative;z-index: 2;">
				<tbody><tr>
					<td>
						<table style="width:100%;border-collapse: collapse;">
							<tbody><tr>
								<td>
									<table style="width:100%;border-collapse: collapse;">
										<tbody><tr>
											<td colspan="2" style="padding: 5px 15px; text-align:center">
												
											</td>
										</tr>
									</tbody></table>
								</td>
							</tr>
							<tr>
								<td>
									
								</td>
							</tr>
						</tbody></table>
						<table style="width:100%;border-collapse: collapse;background-color:#fff;max-width:600px; margin: 0 auto;border-radius: 10px;">
							<tbody>
								<tr>
								<td colspan="2" style="padding: 50px 55px 0px; text-align:center;">
						                <a href="${gskDomain}" target="_blank">
											<img style="width: 100%; max-width: 150px;" src="${data.logo||rentdigicareLogo}">
										</a>                      

									<h2 style="color: #622e30;font-family: 'Poppins', sans-serif;font-weight: 600;margin: 0 0 25px;font-size: 25px;">Dear ${
                    data.propertyManager
                  },</h2>
									<p style="font-family: 'Poppins', sans-serif; color: #3f2c0f; font-size: 15px; margin-bottom: 30px;">
										Hey there!<br>
										You have received a maintenance request from ${data.applicantName} - ${
      data.applicantEmail
    } who is residing in ${data.propertyName} Property .
									</p>
									<p style="font-family: 'Poppins', sans-serif;color: #622e30;font-size: 15px;margin-bottom: 10px;font-weight: 600;">Appointment Details :</p>
									<p style="font-family: 'Poppins', sans-serif; color: #231F1F; font-size: 15px; margin-bottom: 30px;">
										Request Type: ${data.requestType}<br>
										Permission To Enter Suite: ${data.permission}<br>
										Property: ${data.propertyName}<br>
										Suite: ${data.suite}<br>
										Phone: ${data.phone}<br>
										Description: ${data.details}
									</p>
									<p style="font-family: 'Poppins', sans-serif; color: #3f2c0f; font-size: 15px; max-width: 640px; width: 100%; margin-left: auto; margin-right: auto; margin-bottom: 30px;">  Please feel free to contact the customer.</p> 
									<p style="font-family: 'Poppins', sans-serif;color: #3f2c0f;font-size: 15px;max-width: 640px;width: 100%;margin-left: auto;margin-right: auto;margin-bottom: 10px;">Best regards,</p> 
									<p style="font-family: 'Poppins', sans-serif; color: #3f2c0f; font-size: 15px; max-width: 640px; width: 100%; margin-left: auto; margin-right: auto; margin-bottom: 30px;">Team ${
                    data.companyName
                  }</p>
								</td>
								</tr>
							</tbody>
						</table>
						<table style="width:100%;border-collapse: collapse;background-color:transparent;max-width:600px; margin: 0 auto;border-bottom-left-radius: 10px;border-bottom-right-radius: 10px;">
                            <tbody>
								<tr>
                                <td colspan="2" style="padding: 0px 0px; text-align:center;">
                                    <img style="width: 100%; display:block;" src="${greyshape}"/>
                                </td>
                            	</tr>
                            	<tr>
                                <td colspan="2" style="padding: 0px 0px; text-align:center;">
                                    <img style="width: 100%; display:block;max-width:130px;    margin: 10px auto 25px;" src="${
                                      data.logo || rentdigicareLogo
                                    }">
                                </td>
                            	</tr>
                        	</tbody>
						</table>
					 	<table style="width:100%; background-color:transparent;border-collapse: collapse;">
							<tbody>
								<tr>
									<td colspan="2" style="padding: 40px 15px; text-align:center;">
										<p style="color: #3f2c0f; font-size: 15px; font-family: 'Poppins', sans-serif; margin: 5px 0;">
											©Copyrights 2024 
											- All rights reserved
										</p>
										<p style="color: #3f2c0f; font-size: 15px; font-family: 'Poppins', sans-serif; margin: 15px 0;">
											Don’t like these emails? 
											<a style="font-family: 'Poppins', sans-serif; text-decoration: none; color: #553710; font-size: 15px; font-weight: 600;" href="#">Unsubscribe</a> 
											or 
											<a style="font-family: 'Poppins', sans-serif; text-decoration: none; color: #553710; font-size: 15px; font-weight: 600;" href="#">Manage Email Subscriptions</a>
										</p>
									</td>
								</tr>
							</tbody>
						</table>
                    </td> 
                </tr>
            </tbody>
			</table>
        </div>
    </div>
</div>
</body>`;
  }

  if (emailFor === "CLOSE_TICKET_MAIL_TO_MANAGER") {
    return `
    <!DOCTYPE html>
    <html>
    <head>
    <title>Close Ticket Mail To Manager</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <style>
    body {
        margin: 0;
    }
    </style>
    </head>
    <body>
    <div class="email-tempate" style="margin: 50px 0;">
      <div class="email-inner" style="width:100%; max-width:760px; margin:0 auto;border: 1px solid #f1f1f1; background-color: #F7F7F7;position:relative;">
        <div class="em-bg" style="background-color: #74E291; height: 510px; position: absolute; left: 0; right: 0; top: 0; z-index: 0; border-bottom-left-radius: 35px; border-bottom-right-radius: 35px;">
          <table style="width:100%; max-width:100%; margin:0 auto; border-collapse: collapse;position:relative;z-index: 2;">
            <tr>
              <td>
                <table style="width:100%;border-collapse: collapse;">
                  <tr>
                    <td>
                      <table style="width:100%;border-collapse: collapse;">
                        <tr>
                          <td colspan="2" style="padding: 5px 15px; text-align:center">
                            <img style="width: 100%; max-width: 150px;" src="${
                              data.logo || rentdigicareLogo
                            }"/>
                            </a>  
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      
                    </td>
                  </tr>
                </table>
                <table style="width:100%;border-collapse: collapse;background-color:#fff;max-width:600px; margin: 0 auto;border-radius: 10px;">
                                
                  <tr>
                    <td colspan="2" style="padding: 50px 55px 0px; text-align:center;">
                    <!-- <a href="${gskDomain}" target="_blank">
                            <img style="width: 100%; max-width: 150px;" src="${
                              data.logo || rentdigicareLogo
                            }"/>
                            </a>         -->
                                                    <h1 style="color: #643A6B; font-family: 'Poppins', sans-serif; font-weight: 700; margin: 0 0 25px; font-size: 25px;">Reminder for closing the ticket!</h1>
                                                        <span class="es-button-border" style="border-style:solid;border-color:#643A6B;background:none 0% 0% repeat scroll #26a4d3;border-width:0px;display:inline-block;border-radius:50px;width:auto;margin-top: 5px;"><a href="${domain}/login" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;transition:all 100ms ease-in;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:14px;border-style:solid;border-color:#643A6B;border-width:15px 30px 15px 30px;display:inline-block;background:#643A6B;border-radius:50px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:bold;font-style:normal;line-height:17px;width:auto;text-align:center">ACCESS ACCOUNT</a></span>           
    
                      <p style="color: #643A6B; font-family: 'Poppins', sans-serif; font-weight: 600; margin: 10px 0 25px; font-size: 18px;">Dear ${
                        data.staff
                      },</p>
                                          <p style="color: #000000; font-family: 'Poppins', sans-serif;  margin: 10px 0 0; font-size: 15px;">
                                            Please close the ticket ID- ${
                                              data.ticketId
                                            } from the ${
      data.propertyName
    } Property of ${data.companyName} company.
                                          </p>
                                         
                                          
                      
                                          <p style="font-family: 'Poppins', sans-serif; color: #000000; font-size: 15px; max-width: 640px; width: 100%; margin-left: auto; margin-right: auto; margin-bottom: 30px;">
                                           
                                            If the above "ACCESS ACCOUNT" button does not work then click on link below:
                                            <br>
                                            <a style="color: #643A6B;font-weight: 600;" href="${domain}/Login">${domain}/Login</a>
                                          </p>
                                          
    
                      <p style="font-family: 'Poppins', sans-serif; color: #000000; font-size: 15px; max-width: 640px; width: 100%; margin-left: auto; margin-right: auto;">Cheers,</p> 
                      <p style="font-family: 'Poppins', sans-serif; color: #643A6B; font-size: 15px; max-width: 640px; width: 100%; margin-left: auto; margin-right: auto; margin-bottom: 30px;"><strong>Team ${
                        data.companyName
                      }</strong></p>
                    </td>
                  </tr>
                  
                </table>
                  <table style="width:100%;border-collapse: collapse;background-color:transparent;max-width:600px; margin: 0 auto;border-bottom-left-radius: 10px;border-bottom-right-radius: 10px;">
                                <tr>
                                    <td colspan="2" style="padding: 0px 0px; text-align:center;">
                                        <img style="width: 100%; display:block;" src="${greyshape}"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2" style="padding: 0px 0px; text-align:center;">
                                        <img style="width: 100%; display:block;max-width:130px;    margin: 10px auto 25px;" src="${
                                          data.logo || rentdigicareLogo
                                        }"/>
                                    </td>
                                </tr>
                            </table>
               <table style="width:100%; background-color:transparent;border-collapse: collapse;">
                                <tr>
                                    <td colspan="2" style="padding: 40px 15px; text-align:center;">
                                        <p style="color: #414242; font-size: 15px; font-family: 'Poppins', sans-serif; margin: 15px 0;">©Copyrights 2024 - <a style="font-family: 'Poppins', sans-serif; text-decoration: none; color: #1a1816; font-size: 15px;font-weight: 600;" href="${
                                          data.companyDomain
                                        }">${
      data.companyDomain
    }</a> - All rights reserved</p>
                                        <p style="color: #414242; font-size: 15px; font-family: 'Poppins', sans-serif; margin: 15px 0;">Don’t like these emails? <a style="font-family: 'Poppins', sans-serif; text-decoration: none; color: #1a1816; font-size: 15px;font-weight: 600;" href="#">Unsubscribe</a> or <a style="font-family: 'Poppins', sans-serif; text-decoration: none; color: #553710; font-size: 15px;font-weight: 600;" href="#">Manage Email Subscriptions</a></p>
                                    </td>
                                </tr>
                            </table>
                        </td> 
                    </tr>
                </table>
            </div>
        </div></div>
    </div>
    </body>
    </html>
  `;
  }

  if (emailFor === "APPLICATION_REGISTERED_EMAIL_TO_APPLICANT") {
    return `<!DOCTYPE html>
<html>
<head>
<title>Application Registered Email to Applicatn</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
<style>
body {
    margin: 0;
}
</style>
</head>
<body>
<div class="email-tempate" style="margin: 50px 0;">
	<div class="email-inner" style="width:100%; max-width:760px; margin:0 auto;border: 1px solid #f1f1f1; background-color: #F7F7F7;position:relative;">
		<div class="em-bg" style="background-color: #9B3922; height: 510px; position: absolute; left: 0; right: 0; top: 0; z-index: 0; border-bottom-left-radius: 35px; border-bottom-right-radius: 35px;">
			<table style="width:100%; max-width:100%; margin:0 auto; border-collapse: collapse;position:relative;z-index: 2;">
				<tr>
					<td>
						<table style="width:100%;border-collapse: collapse;">
							<tr>
								<td>
									<table style="width:100%;border-collapse: collapse;">
										<tr>
											<td colspan="2" style="padding: 5px 15px; text-align:center">
												<img style="width: 100%; max-width: 150px;" src="${data.logo || rentDigiCareLogo}"/>
												</a>  
											</td>
										</tr>
									</table>
								</td>
							</tr>
							<tr>
								<td>
									
								</td>
							</tr>
						</table>
						<table style="width:100%;border-collapse: collapse;background-color:#fff;max-width:600px; margin: 0 auto;border-radius: 10px;">
                            
							<tr>
								<td colspan="2" style="padding: 50px 55px 0px; text-align:center;">
                <!-- <a href="${gskDomain}" target="_blank">
												<img style="width: 100%; max-width: 150px;" src="${data.logo}"/>
												</a>         -->
                                                <h1 style="color: #481E14; font-family: 'Poppins', sans-serif; font-weight: 700; margin: 0 0 25px; font-size: 35px;"> Confirming your application!</h1>
                                                
                                                    <span class="es-button-border" style="border-style:solid;border-color:#26a4d3;background:none 0% 0% repeat scroll #26a4d3;border-width:0px;display:inline-block;border-radius:50px;width:auto;margin-top: 5px;"><a href="${
                                                        data.companyDomain
                                                      }" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;transition:all 100ms ease-in;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:14px;border-style:solid;border-color:#481E14;border-width:15px 30px 15px 30px;display:inline-block;background:#481E14;border-radius:50px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:bold;font-style:normal;line-height:17px;width:auto;text-align:center">WEBSITE</a></span>           

									<p style="color: #481E14; font-family: 'Poppins', sans-serif; font-weight: 400; margin: 10px 0 25px; font-size: 18px;">Dear, ${data.applicantName}</p>
                                      <p style="color: #000000; font-family: 'Poppins', sans-serif; font-weight: 600; margin: 10px 0 0; font-size: 15px;">
                                        We just received your application and
                          thank you for showing interest on
                          ${data.propertyName} -
                          ${data.propertyLayout}.<br />
                          Our team will reach out to you in the next
                          few days.
                                      </p><br>
                                      <p style="color: #000000; font-family: 'Poppins', sans-serif;  margin: 10px 0 0; font-size: 15px;">
                                        If the above "WEBSITE" button does not
                                        work then click on link below:<br /><a
                                          href="${data.companyDomain}"
                                          >${data.companyDomain}</a
                                        >
                                      </p>
                                      
									
                                      
                                      

									<p style="font-family: 'Poppins', sans-serif; color: #000000; font-size: 15px; max-width: 640px; width: 100%; margin-left: auto; margin-right: auto;">Cheers,</p> 
									<p style="font-family: 'Poppins', sans-serif; color: #000000; font-size: 15px; max-width: 640px; width: 100%; margin-left: auto; margin-right: auto; margin-bottom: 30px;">Team ${
                                        data?.companyName || ""
                                      }</p>
								</td>
							</tr>
							
						</table>
						  <table style="width:100%;border-collapse: collapse;background-color:transparent;max-width:600px; margin: 0 auto;border-bottom-left-radius: 10px;border-bottom-right-radius: 10px;">
                            <tr>
                                <td colspan="2" style="padding: 0px 0px; text-align:center;">
                                    <img style="width: 100%; display:block;" src="${greyshape}"/>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2" style="padding: 0px 0px; text-align:center;">
                                    <img style="width: 100%; display:block;max-width:130px;    margin: 10px auto 25px;" src="${data.logo}"/>
                                </td>
                            </tr>
                        </table>
					 <table style="width:100%; background-color:transparent;border-collapse: collapse;">
                            <tr>
                                <td colspan="2" style="padding: 40px 15px; text-align:center;">
                                    <p style="color: #414242; font-size: 15px; font-family: 'Poppins', sans-serif; margin: 15px 0;">©Copyrights 2024 - <a style="font-family: 'Poppins', sans-serif; text-decoration: none; color: #1a1816; font-size: 15px;font-weight: 600;" href="${data.companyDomain}">${data.companyDomain}</a> - All rights reserved</p>
                                    <p style="color: #414242; font-size: 15px; font-family: 'Poppins', sans-serif; margin: 15px 0;">Don’t like these emails? <a style="font-family: 'Poppins', sans-serif; text-decoration: none; color: #1a1816; font-size: 15px;font-weight: 600;" href="#">Unsubscribe</a> or <a style="font-family: 'Poppins', sans-serif; text-decoration: none; color: #553710; font-size: 15px;font-weight: 600;" href="#">Manage Email Subscriptions</a></p>
                                </td>
                            </tr>
                        </table>
                    </td> 
                </tr>
            </table>
        </div>
    </div></div>
</div>
</body>
</html>`;
  }

  if (emailFor === "COMPANY_PROFILE_UPDATE") {
    return `
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" style="width:100%;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"> 
 <head> 
  <meta charset="UTF-8"> 
  <meta content="width=device-width, initial-scale=1" name="viewport"> 
  <meta name="x-apple-disable-message-reformatting"> 
  <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
  <meta content="telephone=no" name="format-detection"> 
  <title>New email template 2022-06-24</title><!--[if (mso 16)]>
    <style type="text/css">
    a {text-decoration: none;}
    </style>
    <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
<xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG></o:AllowPNG>
    <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
</xml>
<![endif]--><!--[if !mso]><!-- --> 
  <link href="https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i" rel="stylesheet"><!--<![endif]--> 
  <style type="text/css">
#outlook a {
\tpadding:0;
}
.ExternalClass {
\twidth:100%;
}
.ExternalClass,
.ExternalClass p,
.ExternalClass span,
.ExternalClass font,
.ExternalClass td,
.ExternalClass div {
\tline-height:100%;
}
.es-button {
\tmso-style-priority:100!important;
\ttext-decoration:none!important;
\ttransition:all 100ms ease-in;
}
a[x-apple-data-detectors] {
\tcolor:inherit!important;
\ttext-decoration:none!important;
\tfont-size:inherit!important;
\tfont-family:inherit!important;
\tfont-weight:inherit!important;
\tline-height:inherit!important;
}
.es-button:hover {
\tbackground:#555555!important;
\tborder-color:#555555!important;
}
.es-desk-hidden {
\tdisplay:none;
\tfloat:left;
\toverflow:hidden;
\twidth:0;
\tmax-height:0;
\tline-height:0;
\tmso-hide:all;
}
[data-ogsb] .es-button {
\tborder-width:0!important;
\tpadding:15px 30px 15px 30px!important;
}
[data-ogsb] .es-button.es-button-1 {
\tpadding:15px 25px!important;
}
@media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120%!important } h1 { font-size:30px!important; text-align:center } h2 { font-size:26px!important; text-align:left } h3 { font-size:20px!important; text-align:left } h1 a { text-align:center } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:30px!important } h2 a { text-align:left } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:20px!important } h3 a { text-align:left } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:17px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:17px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } a.es-button, button.es-button { font-size:14px!important; display:inline-block!important; border-width:15px 25px 15px 25px!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important } }
</style> 
 </head> 
 <body style="width:100%;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"> 
  <div class="es-wrapper-color" style="background-color:#F1F1F1"><!--[if gte mso 9]>
\t\t\t<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
\t\t\t\t<v:fill type="tile" color="#f1f1f1"></v:fill>
\t\t\t</v:background>
\t\t<![endif]--> 
   <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top"> 
     <tr style="border-collapse:collapse"> 
      <td valign="top" style="padding:0;Margin:0"> 
     
       <table cellpadding="0" cellspacing="0" class="es-header" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-header-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> 
             <tr style="border-collapse:collapse"> 
              <td style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:40px;padding-right:40px;background-color:#ffffff" bgcolor="#333333" align="left"> 
                <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                  <tr style="border-collapse:collapse"> 
                   <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                    <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                      <tr style="border-collapse:collapse"> 
                       <td align="center" style="padding:0;Margin:0;font-size:0; "><a href="${gskDomain}" target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#ffffff;font-size:14px"><img src="${
      data.logo || rentdigicareLogo
    }" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; height:76px;weight:150px" ></a></td> 
                      </tr> 
                    </table></td> 
                  </tr> 
                </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#333333;width:600px" cellspacing="0" cellpadding="0" bgcolor="#333333" align="center"> 
             <tr style="border-collapse:collapse"> 
              <td style="Margin:0;padding-top:40px;padding-bottom:40px;padding-left:40px;padding-right:40px;background-image:url('https://jlbcxs.stripocdn.email/content/guids/CABINET_85e4431b39e3c4492fca561009cef9b5/images/93491522393929597.png');background-repeat:no-repeat" align="left" background="https://jlbcxs.stripocdn.email/content/guids/CABINET_85e4431b39e3c4492fca561009cef9b5/images/93491522393929597.png"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-bottom:10px;padding-top:40px"><h1 style="Margin:0;line-height:36px;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;font-size:30px;font-style:normal;font-weight:bold;color:#ffffff">Your profile details are updated successfully!</h1></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td esdev-links-color="#757575" align="center" style="Margin:0;padding-top:10px;padding-bottom:20px;padding-left:30px;padding-right:30px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#c5c5c5;font-size:15px"></p></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:20px"><span class="es-button-border" style="border-style:solid;border-color:#26a4d3;background:none 0% 0% repeat scroll #26a4d3;border-width:0px;display:inline-block;border-radius:50px;width:auto"><a href="${domain}/login" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;transition:all 100ms ease-in;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:14px;border-style:solid;border-color:#26a4d3;border-width:15px 30px 15px 30px;display:inline-block;background:#26a4d3;border-radius:50px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:bold;font-style:normal;line-height:17px;width:auto;text-align:center">ACCESS ACCOUNT</a></span></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px"> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="padding:0;Margin:0;padding-top:40px;padding-left:40px;padding-right:40px"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                    <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-bottom:10px; "><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#000000;font-size:15px">Dear, ${
                        data.owner
                      }</p></td> 
                     </tr>
                     <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-bottom:10px; "><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">If the above "ACCESS ACCOUNT" button does not work, click on link below: <a href="${domain}/Login">${domain}/Login</a></p></td> 
                     </tr> 
                     <!-- <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">If that doesn't work, copy and paste the following link in your browser:<br></p></td> 
                     </tr>
\t\t\t\t\t<tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p href="${domain}/login" style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">${domain}/login<br></p></td> 
                     </tr>\t\t\t\t\t  -->
                     <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">Cheers,<br><strong>Team ${
                        data.companyName
                      }</strong></p></td> 
                     </tr> 
                     <!-- <tr style="border-collapse:collapse margin-top: 20px"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px"><strong>Rentdigicare</strong></p></td> 
                     </tr>  -->
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
             
           </table></td> 
         </tr> 
       </table> 
     
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#292828;width:600px" cellspacing="0" cellpadding="0" bgcolor="#292828" align="center"> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="Margin:0;padding-top:30px;padding-bottom:30px;padding-left:40px;padding-right:40px"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;font-size:0"> 
                       <table class="es-table-not-adapt es-social" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                         <tr style="border-collapse:collapse"> 
                          <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px">
                            <a href="https://www.facebook.com/gskproperties"><img title="Facebook" src="https://jlbcxs.stripocdn.email/content/assets/img/social-icons/circle-white/facebook-circle-white.png" alt="Fb" width="24" height="24" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td> 
                          <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px">
                            <a href="https://www.instagram.com/gskproperties/"><img title="Instagram" src="https://jlbcxs.stripocdn.email/content/assets/img/social-icons/circle-white/instagram-circle-white.png" alt="Inst" width="24" height="24" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td> 
                         </tr> 
                       </table></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       <table cellpadding="0" cellspacing="0" class="es-footer" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-footer-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="Margin:0;padding-top:40px;padding-bottom:40px;padding-left:40px;padding-right:40px"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                    
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:18px;color:#666666;font-size:12px"> <a target="_blank" class="unsubscribe" href="#" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#666666;font-size:12px">Unsubscribe</a></p></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:18px;color:#666666;font-size:12px">Copyright © 2022 - All Rights Reserved.</p></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       </td> 
     </tr> 
   </table> 
  </div>  
 </body>
</html>
    `;
  }

  if (emailFor === "COMPANY_ACCOUNT_PASSWORD_CHANGE") {
    return `
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" style="width:100%;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"> 
 <head> 
  <meta charset="UTF-8"> 
  <meta content="width=device-width, initial-scale=1" name="viewport"> 
  <meta name="x-apple-disable-message-reformatting"> 
  <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
  <meta content="telephone=no" name="format-detection"> 
  <title>New email template 2022-06-24</title><!--[if (mso 16)]>
    <style type="text/css">
    a {text-decoration: none;}
    </style>
    <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
<xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG></o:AllowPNG>
    <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
</xml>
<![endif]--><!--[if !mso]><!-- --> 
  <link href="https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i" rel="stylesheet"><!--<![endif]--> 
  <style type="text/css">
#outlook a {
\tpadding:0;
}
.ExternalClass {
\twidth:100%;
}
.ExternalClass,
.ExternalClass p,
.ExternalClass span,
.ExternalClass font,
.ExternalClass td,
.ExternalClass div {
\tline-height:100%;
}
.es-button {
\tmso-style-priority:100!important;
\ttext-decoration:none!important;
\ttransition:all 100ms ease-in;
}
a[x-apple-data-detectors] {
\tcolor:inherit!important;
\ttext-decoration:none!important;
\tfont-size:inherit!important;
\tfont-family:inherit!important;
\tfont-weight:inherit!important;
\tline-height:inherit!important;
}
.es-button:hover {
\tbackground:#555555!important;
\tborder-color:#555555!important;
}
.es-desk-hidden {
\tdisplay:none;
\tfloat:left;
\toverflow:hidden;
\twidth:0;
\tmax-height:0;
\tline-height:0;
\tmso-hide:all;
}
[data-ogsb] .es-button {
\tborder-width:0!important;
\tpadding:15px 30px 15px 30px!important;
}
[data-ogsb] .es-button.es-button-1 {
\tpadding:15px 25px!important;
}
@media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120%!important } h1 { font-size:30px!important; text-align:center } h2 { font-size:26px!important; text-align:left } h3 { font-size:20px!important; text-align:left } h1 a { text-align:center } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:30px!important } h2 a { text-align:left } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:20px!important } h3 a { text-align:left } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:17px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:17px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } a.es-button, button.es-button { font-size:14px!important; display:inline-block!important; border-width:15px 25px 15px 25px!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important } }
</style> 
 </head> 
 <body style="width:100%;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"> 
  <div class="es-wrapper-color" style="background-color:#F1F1F1"><!--[if gte mso 9]>
\t\t\t<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
\t\t\t\t<v:fill type="tile" color="#f1f1f1"></v:fill>
\t\t\t</v:background>
\t\t<![endif]--> 
   <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top"> 
     <tr style="border-collapse:collapse"> 
      <td valign="top" style="padding:0;Margin:0"> 
     
       <table cellpadding="0" cellspacing="0" class="es-header" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-header-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> 
             <tr style="border-collapse:collapse"> 
              <td style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:40px;padding-right:40px;background-color:#ffffff" bgcolor="#333333" align="left"> 
                <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                  <tr style="border-collapse:collapse"> 
                   <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                    <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                      <tr style="border-collapse:collapse"> 
                       <td align="center" style="padding:0;Margin:0;font-size:0; "><a href="${gskDomain}" target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#ffffff;font-size:14px"><img src="${
      data.logo || rentdigicareLogo
    }" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; height:76px;weight:150px" ></a></td> 
                      </tr> 
                    </table></td> 
                  </tr> 
                </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#333333;width:600px" cellspacing="0" cellpadding="0" bgcolor="#333333" align="center"> 
             <tr style="border-collapse:collapse"> 
              <td style="Margin:0;padding-top:40px;padding-bottom:40px;padding-left:40px;padding-right:40px;background-image:url('https://jlbcxs.stripocdn.email/content/guids/CABINET_85e4431b39e3c4492fca561009cef9b5/images/93491522393929597.png');background-repeat:no-repeat" align="left" background="https://jlbcxs.stripocdn.email/content/guids/CABINET_85e4431b39e3c4492fca561009cef9b5/images/93491522393929597.png"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-bottom:10px;padding-top:40px"><h1 style="Margin:0;line-height:36px;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;font-size:30px;font-style:normal;font-weight:bold;color:#ffffff">Your password has been changed successfully!</h1></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td esdev-links-color="#757575" align="center" style="Margin:0;padding-top:10px;padding-bottom:20px;padding-left:30px;padding-right:30px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#c5c5c5;font-size:15px"></p></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:20px"><span class="es-button-border" style="border-style:solid;border-color:#26a4d3;background:none 0% 0% repeat scroll #26a4d3;border-width:0px;display:inline-block;border-radius:50px;width:auto"><a href="${domain}/login" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;transition:all 100ms ease-in;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:14px;border-style:solid;border-color:#26a4d3;border-width:15px 30px 15px 30px;display:inline-block;background:#26a4d3;border-radius:50px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:bold;font-style:normal;line-height:17px;width:auto;text-align:center">ACCESS ACCOUNT</a></span></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px"> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="padding:0;Margin:0;padding-top:40px;padding-left:40px;padding-right:40px"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     
                    <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-bottom:10px; "><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#000000;font-size:15px">Dear, ${
                        data.owner
                      }</p></td> 
                     </tr>
                     <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-bottom:10px; "><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">If the above "ACCESS ACCOUNT" button does not work, click on link below: <a href="${domain}/Login">${domain}/Login</a></p></td> 
                     </tr>  
                     <!-- <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">If that doesn't work, copy and paste the following link in your browser:<br></p></td> 
                     </tr>
\t\t\t\t\t<tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p href="${domain}/login" style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">${domain}/login<br></p></td> 
                     </tr>\t\t\t\t\t  -->
                     <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">Cheers,<br><strong>Team ${
                        data.companyName
                      }</strong></p></td> 
                     </tr>
                     <!-- <tr style="border-collapse:collapse margin-top: 20px"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px"><strong>Rentdigicare</strong></p></td> 
                     </tr>  -->
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
             
           </table></td> 
         </tr> 
       </table> 
     
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#292828;width:600px" cellspacing="0" cellpadding="0" bgcolor="#292828" align="center"> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="Margin:0;padding-top:30px;padding-bottom:30px;padding-left:40px;padding-right:40px"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;font-size:0"> 
                       <table class="es-table-not-adapt es-social" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                         <tr style="border-collapse:collapse"> 
                          <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px">
                           <a href="https://www.facebook.com/Rentdigi/"><img title="Facebook" src="https://jlbcxs.stripocdn.email/content/assets/img/social-icons/circle-white/facebook-circle-white.png" alt="Fb" width="24" height="24" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td> 
                          <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px">
                           <a href="https://www.instagram.com/rentdigi/"><img title="Instagram" src="https://jlbcxs.stripocdn.email/content/assets/img/social-icons/circle-white/instagram-circle-white.png" alt="Inst" width="24" height="24" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td> 
                         </tr> 
                       </table></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       <table cellpadding="0" cellspacing="0" class="es-footer" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-footer-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="Margin:0;padding-top:40px;padding-bottom:40px;padding-left:40px;padding-right:40px"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                    
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:18px;color:#666666;font-size:12px"> <a target="_blank" class="unsubscribe" href="#" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#666666;font-size:12px">Unsubscribe</a></p></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:18px;color:#666666;font-size:12px">Copyright © 2022 - All Rights Reserved.</p></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       </td> 
     </tr> 
   </table> 
  </div>  
 </body>
</html>
    `;
  }

  if (emailFor === "APPLICATION_STATUS_CHANGE_EMAIL_TO_COMPANY") {
    return `
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" style="width:100%;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"> 
 <head> 
  <meta charset="UTF-8"> 
  <meta content="width=device-width, initial-scale=1" name="viewport"> 
  <meta name="x-apple-disable-message-reformatting"> 
  <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
  <meta content="telephone=no" name="format-detection"> 
  <title>New email template 2022-06-24</title><!--[if (mso 16)]>
    <style type="text/css">
    a {text-decoration: none;}
    </style>
    <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
<xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG></o:AllowPNG>
    <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
</xml>
<![endif]--><!--[if !mso]><!-- --> 
  <link href="https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i" rel="stylesheet"><!--<![endif]--> 
  <style type="text/css">
#outlook a {
\tpadding:0;
}
.ExternalClass {
\twidth:100%;
}
.ExternalClass,
.ExternalClass p,
.ExternalClass span,
.ExternalClass font,
.ExternalClass td,
.ExternalClass div {
\tline-height:100%;
}
.es-button {
\tmso-style-priority:100!important;
\ttext-decoration:none!important;
\ttransition:all 100ms ease-in;
}
a[x-apple-data-detectors] {
\tcolor:inherit!important;
\ttext-decoration:none!important;
\tfont-size:inherit!important;
\tfont-family:inherit!important;
\tfont-weight:inherit!important;
\tline-height:inherit!important;
}
.es-button:hover {
\tbackground:#555555!important;
\tborder-color:#555555!important;
}
.es-desk-hidden {
\tdisplay:none;
\tfloat:left;
\toverflow:hidden;
\twidth:0;
\tmax-height:0;
\tline-height:0;
\tmso-hide:all;
}
[data-ogsb] .es-button {
\tborder-width:0!important;
\tpadding:15px 30px 15px 30px!important;
}
[data-ogsb] .es-button.es-button-1 {
\tpadding:15px 25px!important;
}
@media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120%!important } h1 { font-size:30px!important; text-align:center } h2 { font-size:26px!important; text-align:left } h3 { font-size:20px!important; text-align:left } h1 a { text-align:center } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:30px!important } h2 a { text-align:left } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:20px!important } h3 a { text-align:left } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:17px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:17px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } a.es-button, button.es-button { font-size:14px!important; display:inline-block!important; border-width:15px 25px 15px 25px!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important } }
</style> 
 </head> 
 <body style="width:100%;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"> 
  <div class="es-wrapper-color" style="background-color:#F1F1F1"><!--[if gte mso 9]>
\t\t\t<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
\t\t\t\t<v:fill type="tile" color="#f1f1f1"></v:fill>
\t\t\t</v:background>
\t\t<![endif]--> 
   <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top"> 
     <tr style="border-collapse:collapse"> 
      <td valign="top" style="padding:0;Margin:0"> 
     
       <table cellpadding="0" cellspacing="0" class="es-header" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-header-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> 
             <tr style="border-collapse:collapse"> 
              <td style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:40px;padding-right:40px;background-color:#ffffff" bgcolor="#333333" align="left"> 
                <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                  <tr style="border-collapse:collapse"> 
                   <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                    <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                      <tr style="border-collapse:collapse"> 
                       <td align="center" style="padding:0;Margin:0;font-size:0; "><a href="${gskDomain}" target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#ffffff;font-size:14px"><img src="${
      data.logo || rentdigicareLogo
    }" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; height:76px;weight:150px" ></a></td> 
                      </tr> 
                    </table></td> 
                  </tr> 
                </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#333333;width:600px" cellspacing="0" cellpadding="0" bgcolor="#333333" align="center"> 
             <tr style="border-collapse:collapse"> 
              <td style="Margin:0;padding-top:40px;padding-bottom:40px;padding-left:40px;padding-right:40px;background-image:url('https://jlbcxs.stripocdn.email/content/guids/CABINET_85e4431b39e3c4492fca561009cef9b5/images/93491522393929597.png');background-repeat:no-repeat" align="left" background="https://jlbcxs.stripocdn.email/content/guids/CABINET_85e4431b39e3c4492fca561009cef9b5/images/93491522393929597.png"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-bottom:10px;padding-top:40px"><h1 style="Margin:0;line-height:36px;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;font-size:30px;font-style:normal;font-weight:bold;color:#ffffff">Application status changed!</h1></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td esdev-links-color="#757575" align="center" style="Margin:0;padding-top:10px;padding-bottom:20px;padding-left:30px;padding-right:30px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#c5c5c5;font-size:15px"></p></td> 
                     </tr> 
                     <!-- <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:20px"><span class="es-button-border" style="border-style:solid;border-color:#26a4d3;background:none 0% 0% repeat scroll #26a4d3;border-width:0px;display:inline-block;border-radius:50px;width:auto"><a href="${domain}/login" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;transition:all 100ms ease-in;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:14px;border-style:solid;border-color:#26a4d3;border-width:15px 30px 15px 30px;display:inline-block;background:#26a4d3;border-radius:50px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:bold;font-style:normal;line-height:17px;width:auto;text-align:center">ACCESS ACCOUNT</a></span></td> 
                     </tr>  -->
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px"> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="padding:0;Margin:0;padding-top:40px;padding-left:40px;padding-right:40px"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     
                     <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-bottom:10px; "><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">Dear, ${
                        data.owner
                      }</p></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-bottom:10px; "><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">Status of an application form ${
                        data.applicantName
                      } - ${data.applicantEmail} for ${data.propertyName} - ${
      data.propertyLayout
    } has changed to ${data.applicationStatus}.</p></td> 
                     </tr> 
                     <!-- <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">If that doesn't work, copy and paste the following link in your browser:<br></p></td> 
                     </tr>
\t\t\t\t\t<tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p href="${domain}/login" style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">${domain}/login<br></p></td> 
                     </tr>\t\t\t\t\t  -->
                     <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">Cheers,<br><strong>Team ${
                        data.companyName
                      }</strong></p></td> 
                     </tr> 
                     <!-- <tr style="border-collapse:collapse margin-top: 20px"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px"><strong>Rentdigicare</strong></p></td> 
                     </tr>  -->
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
             
           </table></td> 
         </tr> 
       </table> 
     
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#292828;width:600px" cellspacing="0" cellpadding="0" bgcolor="#292828" align="center"> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="Margin:0;padding-top:30px;padding-bottom:30px;padding-left:40px;padding-right:40px"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;font-size:0"> 
                       <table class="es-table-not-adapt es-social" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                         <tr style="border-collapse:collapse"> 
                          <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px">
                            <a href="https://www.facebook.com/gskproperties"><img title="Facebook" src="https://jlbcxs.stripocdn.email/content/assets/img/social-icons/circle-white/facebook-circle-white.png" alt="Fb" width="24" height="24" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td> 
                          <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px">
                            <a href="https://www.instagram.com/gskproperties/"><img title="Instagram" src="https://jlbcxs.stripocdn.email/content/assets/img/social-icons/circle-white/instagram-circle-white.png" alt="Inst" width="24" height="24" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td> 
                         </tr> 
                       </table></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       <table cellpadding="0" cellspacing="0" class="es-footer" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-footer-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="Margin:0;padding-top:40px;padding-bottom:40px;padding-left:40px;padding-right:40px"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                    
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:18px;color:#666666;font-size:12px"> <a target="_blank" class="unsubscribe" href="#" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#666666;font-size:12px">Unsubscribe</a></p></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:18px;color:#666666;font-size:12px">Copyright © 2022 - All Rights Reserved.</p></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       </td> 
     </tr> 
   </table> 
  </div>  
 </body>
</html>
    `;
  }

  if (emailFor === "COMPANY_RESET_PASSWORD_EMAIL") {
    return `
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" style="width:100%;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"> 
 <head> 
  <meta charset="UTF-8"> 
  <meta content="width=device-width, initial-scale=1" name="viewport"> 
  <meta name="x-apple-disable-message-reformatting"> 
  <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
  <meta content="telephone=no" name="format-detection"> 
  <title>New email template 2022-06-24</title><!--[if (mso 16)]>
    <style type="text/css">
    a {text-decoration: none;}
    </style>
    <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
<xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG></o:AllowPNG>
    <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
</xml>
<![endif]--><!--[if !mso]><!-- --> 
  <link href="https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i" rel="stylesheet"><!--<![endif]--> 
  <style type="text/css">
#outlook a {
\tpadding:0;
}
.ExternalClass {
\twidth:100%;
}
.ExternalClass,
.ExternalClass p,
.ExternalClass span,
.ExternalClass font,
.ExternalClass td,
.ExternalClass div {
\tline-height:100%;
}
.es-button {
\tmso-style-priority:100!important;
\ttext-decoration:none!important;
\ttransition:all 100ms ease-in;
}
a[x-apple-data-detectors] {
\tcolor:inherit!important;
\ttext-decoration:none!important;
\tfont-size:inherit!important;
\tfont-family:inherit!important;
\tfont-weight:inherit!important;
\tline-height:inherit!important;
}
.es-button:hover {
\tbackground:#555555!important;
\tborder-color:#555555!important;
}
.es-desk-hidden {
\tdisplay:none;
\tfloat:left;
\toverflow:hidden;
\twidth:0;
\tmax-height:0;
\tline-height:0;
\tmso-hide:all;
}
[data-ogsb] .es-button {
\tborder-width:0!important;
\tpadding:15px 30px 15px 30px!important;
}
[data-ogsb] .es-button.es-button-1 {
\tpadding:15px 25px!important;
}
@media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120%!important } h1 { font-size:30px!important; text-align:center } h2 { font-size:26px!important; text-align:left } h3 { font-size:20px!important; text-align:left } h1 a { text-align:center } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:30px!important } h2 a { text-align:left } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:20px!important } h3 a { text-align:left } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:17px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:17px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } a.es-button, button.es-button { font-size:14px!important; display:inline-block!important; border-width:15px 25px 15px 25px!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important } }
</style> 
 </head> 
 <body style="width:100%;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"> 
  <div class="es-wrapper-color" style="background-color:#F1F1F1"><!--[if gte mso 9]>
\t\t\t<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
\t\t\t\t<v:fill type="tile" color="#f1f1f1"></v:fill>
\t\t\t</v:background>
\t\t<![endif]--> 
   <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top"> 
     <tr style="border-collapse:collapse"> 
      <td valign="top" style="padding:0;Margin:0"> 
     
       <table cellpadding="0" cellspacing="0" class="es-header" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-header-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> 
             <tr style="border-collapse:collapse"> 
              <td style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:40px;padding-right:40px;background-color:#ffffff" bgcolor="#333333" align="left"> 
                <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                  <tr style="border-collapse:collapse"> 
                   <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                    <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                      <tr style="border-collapse:collapse"> 
                       <td align="center" style="padding:0;Margin:0;font-size:0; "><a href="${gskDomain}" target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#ffffff;font-size:14px"><img src="${
      data.logo || rentdigicareLogo
    }" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; height:76px;weight:150px" ></a></td> 
                      </tr> 
                    </table></td> 
                  </tr> 
                </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#333333;width:600px" cellspacing="0" cellpadding="0" bgcolor="#333333" align="center"> 
             <tr style="border-collapse:collapse"> 
              <td style="Margin:0;padding-top:40px;padding-bottom:40px;padding-left:40px;padding-right:40px;background-image:url('https://jlbcxs.stripocdn.email/content/guids/CABINET_85e4431b39e3c4492fca561009cef9b5/images/93491522393929597.png');background-repeat:no-repeat" align="left" background="https://jlbcxs.stripocdn.email/content/guids/CABINET_85e4431b39e3c4492fca561009cef9b5/images/93491522393929597.png"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-bottom:10px;padding-top:40px"><h1 style="Margin:0;line-height:36px;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;font-size:30px;font-style:normal;font-weight:bold;color:#ffffff">Password reset request!</h1></td> 
                     </tr> 
                     
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:20px"><span class="es-button-border" style="border-style:solid;border-color:#26a4d3;background:none 0% 0% repeat scroll #26a4d3;border-width:0px;display:inline-block;border-radius:50px;width:auto"><a href="${
                        data.resetLink
                      }" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;transition:all 100ms ease-in;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:14px;border-style:solid;border-color:#26a4d3;border-width:15px 30px 15px 30px;display:inline-block;background:#26a4d3;border-radius:50px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:bold;font-style:normal;line-height:17px;width:auto;text-align:center">RESET PASSWORD</a></span></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px"> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="padding:0;Margin:0;padding-top:40px;padding-left:40px;padding-right:40px"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                    <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-bottom:10px; "><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">Dear, ${
                        data.owner
                      }</p></td> 
                     </tr> 
                    <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-bottom:10px; "><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">Request to reset the password for the admin account associated with ${
                        data.email
                      } has been received.<br>No changes have been made to your account yet.</p></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-bottom:10px; "><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">If the above "RESET PASSWORD" button does not work, click on link below:<br> <a href="${
                        data.resetLink
                      }">${data.resetLink}</a></p></td> 
                     </tr> 
                     <!-- <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">If that doesn't work, copy and paste the following link in your browser:<br></p></td> 
                     </tr>
\t\t\t\t\t<tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p href="${domain}/login" style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">${domain}/login<br></p></td> 
                     </tr>\t\t\t\t\t  -->
                     <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">Cheers,<br><strong>Team ${
                        data.companyName
                      }</strong></p></td> 
                     </tr> 
                     <!-- <tr style="border-collapse:collapse margin-top: 20px"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px"><strong>Rentdigicare</strong></p></td> 
                     </tr>  -->
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
             
           </table></td> 
         </tr> 
       </table> 
     
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#292828;width:600px" cellspacing="0" cellpadding="0" bgcolor="#292828" align="center"> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="Margin:0;padding-top:30px;padding-bottom:30px;padding-left:40px;padding-right:40px"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;font-size:0"> 
                       <table class="es-table-not-adapt es-social" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                         <tr style="border-collapse:collapse"> 
                          <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px">
                           <a href="https://www.facebook.com/Rentdigi/"><img title="Facebook" src="https://jlbcxs.stripocdn.email/content/assets/img/social-icons/circle-white/facebook-circle-white.png" alt="Fb" width="24" height="24" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td> 
                          <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px">
                           <a href="https://www.instagram.com/rentdigi/"><img title="Instagram" src="https://jlbcxs.stripocdn.email/content/assets/img/social-icons/circle-white/instagram-circle-white.png" alt="Inst" width="24" height="24" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td> 
                         </tr> 
                       </table></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       <table cellpadding="0" cellspacing="0" class="es-footer" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-footer-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="Margin:0;padding-top:40px;padding-bottom:40px;padding-left:40px;padding-right:40px"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                    
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:18px;color:#666666;font-size:12px"> <a target="_blank" class="unsubscribe" href="#" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#666666;font-size:12px">Unsubscribe</a></p></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:18px;color:#666666;font-size:12px">Copyright © 2022 - All Rights Reserved.</p></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       </td> 
     </tr> 
   </table> 
  </div>  
 </body>
</html>
    `;
  }

  if (emailFor === "PROPERTY_MANAGER_PASSWORD_CHANGE") {
    return `
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" style="width:100%;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"> 
 <head> 
  <meta charset="UTF-8"> 
  <meta content="width=device-width, initial-scale=1" name="viewport"> 
  <meta name="x-apple-disable-message-reformatting"> 
  <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
  <meta content="telephone=no" name="format-detection"> 
  <title>New email template 2022-06-24</title><!--[if (mso 16)]>
    <style type="text/css">
    a {text-decoration: none;}
    </style>
    <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
<xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG></o:AllowPNG>
    <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
</xml>
<![endif]--><!--[if !mso]><!-- --> 
  <link href="https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i" rel="stylesheet"><!--<![endif]--> 
  <style type="text/css">
#outlook a {
\tpadding:0;
}
.ExternalClass {
\twidth:100%;
}
.ExternalClass,
.ExternalClass p,
.ExternalClass span,
.ExternalClass font,
.ExternalClass td,
.ExternalClass div {
\tline-height:100%;
}
.es-button {
\tmso-style-priority:100!important;
\ttext-decoration:none!important;
\ttransition:all 100ms ease-in;
}
a[x-apple-data-detectors] {
\tcolor:inherit!important;
\ttext-decoration:none!important;
\tfont-size:inherit!important;
\tfont-family:inherit!important;
\tfont-weight:inherit!important;
\tline-height:inherit!important;
}
.es-button:hover {
\tbackground:#555555!important;
\tborder-color:#555555!important;
}
.es-desk-hidden {
\tdisplay:none;
\tfloat:left;
\toverflow:hidden;
\twidth:0;
\tmax-height:0;
\tline-height:0;
\tmso-hide:all;
}
[data-ogsb] .es-button {
\tborder-width:0!important;
\tpadding:15px 30px 15px 30px!important;
}
[data-ogsb] .es-button.es-button-1 {
\tpadding:15px 25px!important;
}
@media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120%!important } h1 { font-size:30px!important; text-align:center } h2 { font-size:26px!important; text-align:left } h3 { font-size:20px!important; text-align:left } h1 a { text-align:center } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:30px!important } h2 a { text-align:left } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:20px!important } h3 a { text-align:left } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:17px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:17px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } a.es-button, button.es-button { font-size:14px!important; display:inline-block!important; border-width:15px 25px 15px 25px!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important } }
</style> 
 </head> 
 <body style="width:100%;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"> 
  <div class="es-wrapper-color" style="background-color:#F1F1F1"><!--[if gte mso 9]>
\t\t\t<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
\t\t\t\t<v:fill type="tile" color="#f1f1f1"></v:fill>
\t\t\t</v:background>
\t\t<![endif]--> 
   <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top"> 
     <tr style="border-collapse:collapse"> 
      <td valign="top" style="padding:0;Margin:0"> 
     
       <table cellpadding="0" cellspacing="0" class="es-header" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-header-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> 
             <tr style="border-collapse:collapse"> 
              <td style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:40px;padding-right:40px;background-color:#ffffff" bgcolor="#333333" align="left"> 
                <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                  <tr style="border-collapse:collapse"> 
                   <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                    <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                      <tr style="border-collapse:collapse"> 
                       <td align="center" style="padding:0;Margin:0;font-size:0; "><a href="${gskDomain}" target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#ffffff;font-size:14px"><img src="${
      data.logo || rentdigicareLogo
    }" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; height:76px;weight:150px" ></a></td> 
                      </tr> 
                    </table></td> 
                  </tr> 
                </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#333333;width:600px" cellspacing="0" cellpadding="0" bgcolor="#333333" align="center"> 
             <tr style="border-collapse:collapse"> 
              <td style="Margin:0;padding-top:40px;padding-bottom:40px;padding-left:40px;padding-right:40px;background-image:url('https://jlbcxs.stripocdn.email/content/guids/CABINET_85e4431b39e3c4492fca561009cef9b5/images/93491522393929597.png');background-repeat:no-repeat" align="left" background="https://jlbcxs.stripocdn.email/content/guids/CABINET_85e4431b39e3c4492fca561009cef9b5/images/93491522393929597.png"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-bottom:10px;padding-top:40px"><h1 style="Margin:0;line-height:36px;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;font-size:30px;font-style:normal;font-weight:bold;color:#ffffff">Your password has been changed successfully!</h1></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td esdev-links-color="#757575" align="center" style="Margin:0;padding-top:10px;padding-bottom:20px;padding-left:30px;padding-right:30px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#c5c5c5;font-size:15px"></p></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:20px"><span class="es-button-border" style="border-style:solid;border-color:#26a4d3;background:none 0% 0% repeat scroll #26a4d3;border-width:0px;display:inline-block;border-radius:50px;width:auto"><a href="${domain}/login" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;transition:all 100ms ease-in;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:14px;border-style:solid;border-color:#26a4d3;border-width:15px 30px 15px 30px;display:inline-block;background:#26a4d3;border-radius:50px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:bold;font-style:normal;line-height:17px;width:auto;text-align:center">ACCESS ACCOUNT</a></span></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px"> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="padding:0;Margin:0;padding-top:40px;padding-left:40px;padding-right:40px"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     
                    <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-bottom:10px; "><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#000000;font-size:15px">Dear, ${
                        data.managerName
                      }</p></td> 
                     </tr>
                     <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-bottom:10px; "><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">If the above "ACCESS ACCOUNT" button does not work, click on link below: <a href="${domain}/Login">${domain}/Login</a></p></td> 
                     </tr>  
                     <!-- <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">If that doesn't work, copy and paste the following link in your browser:<br></p></td> 
                     </tr>
\t\t\t\t\t<tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p href="${domain}/login" style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">${domain}/login<br></p></td> 
                     </tr>\t\t\t\t\t  -->
                     <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">Cheers,<br><strong>Team ${
                        data.companyName
                      }</strong></p></td> 
                     </tr>
                     <!-- <tr style="border-collapse:collapse margin-top: 20px"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px"><strong>Rentdigicare</strong></p></td> 
                     </tr>  -->
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
             
           </table></td> 
         </tr> 
       </table> 
     
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#292828;width:600px" cellspacing="0" cellpadding="0" bgcolor="#292828" align="center"> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="Margin:0;padding-top:30px;padding-bottom:30px;padding-left:40px;padding-right:40px"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;font-size:0"> 
                       <table class="es-table-not-adapt es-social" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                         <tr style="border-collapse:collapse"> 
                          <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px">
                           <a href="https://www.facebook.com/Rentdigi/"><img title="Facebook" src="https://jlbcxs.stripocdn.email/content/assets/img/social-icons/circle-white/facebook-circle-white.png" alt="Fb" width="24" height="24" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td> 
                          <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px">
                           <a href="https://www.instagram.com/rentdigi/"><img title="Instagram" src="https://jlbcxs.stripocdn.email/content/assets/img/social-icons/circle-white/instagram-circle-white.png" alt="Inst" width="24" height="24" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td> 
                         </tr> 
                       </table></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       <table cellpadding="0" cellspacing="0" class="es-footer" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-footer-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="Margin:0;padding-top:40px;padding-bottom:40px;padding-left:40px;padding-right:40px"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                    
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:18px;color:#666666;font-size:12px"> <a target="_blank" class="unsubscribe" href="#" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#666666;font-size:12px">Unsubscribe</a></p></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:18px;color:#666666;font-size:12px">Copyright © 2022 - All Rights Reserved.</p></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       </td> 
     </tr> 
   </table> 
  </div>  
 </body>
</html>
    `;
  }

  if (emailFor === "PROPERTY_ASSIGNED_TO_MANAGER") {
    return `
            <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
            <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" style="width:100%;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"> 
 <head> 
  <meta charset="UTF-8"> 
  <meta content="width=device-width, initial-scale=1" name="viewport"> 
  <meta name="x-apple-disable-message-reformatting"> 
  <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
  <meta content="telephone=no" name="format-detection"> 
  <title>New email template 2022-06-24</title><!--[if (mso 16)]>
    <style type="text/css">
    a {text-decoration: none;}
    </style>
    <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
<xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG></o:AllowPNG>
    <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
</xml>
<![endif]--><!--[if !mso]><!-- --> 
  <link href="https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i" rel="stylesheet"><!--<![endif]--> 
  <style type="text/css">
#outlook a {
\tpadding:0;
}
.ExternalClass {
\twidth:100%;
}
.ExternalClass,
.ExternalClass p,
.ExternalClass span,
.ExternalClass font,
.ExternalClass td,
.ExternalClass div {
\tline-height:100%;
}
.es-button {
\tmso-style-priority:100!important;
\ttext-decoration:none!important;
\ttransition:all 100ms ease-in;
}
a[x-apple-data-detectors] {
\tcolor:inherit!important;
\ttext-decoration:none!important;
\tfont-size:inherit!important;
\tfont-family:inherit!important;
\tfont-weight:inherit!important;
\tline-height:inherit!important;
}
.es-button:hover {
\tbackground:#555555!important;
\tborder-color:#555555!important;
}
.es-desk-hidden {
\tdisplay:none;
\tfloat:left;
\toverflow:hidden;
\twidth:0;
\tmax-height:0;
\tline-height:0;
\tmso-hide:all;
}
[data-ogsb] .es-button {
\tborder-width:0!important;
\tpadding:15px 30px 15px 30px!important;
}
[data-ogsb] .es-button.es-button-1 {
\tpadding:15px 25px!important;
}
@media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120%!important } h1 { font-size:30px!important; text-align:center } h2 { font-size:26px!important; text-align:left } h3 { font-size:20px!important; text-align:left } h1 a { text-align:center } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:30px!important } h2 a { text-align:left } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:20px!important } h3 a { text-align:left } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:17px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:17px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } a.es-button, button.es-button { font-size:14px!important; display:inline-block!important; border-width:15px 25px 15px 25px!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important } }
</style> 
 </head> 
 <body style="width:100%;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"> 
  <div class="es-wrapper-color" style="background-color:#F1F1F1"><!--[if gte mso 9]>
\t\t\t<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
\t\t\t\t<v:fill type="tile" color="#f1f1f1"></v:fill>
\t\t\t</v:background>
\t\t<![endif]--> 
   <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top"> 
     <tr style="border-collapse:collapse"> 
      <td valign="top" style="padding:0;Margin:0"> 
     
       <table cellpadding="0" cellspacing="0" class="es-header" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-header-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> 
             <tr style="border-collapse:collapse"> 
              <td style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:40px;padding-right:40px;background-color:#ffffff" bgcolor="#333333" align="left"> 
                <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                  <tr style="border-collapse:collapse"> 
                   <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                    <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                      <tr style="border-collapse:collapse"> 
                       <td align="center" style="padding:0;Margin:0;font-size:0; "><a href="${gskDomain}" target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#ffffff;font-size:14px"><img src="${
      data.logo || rentdigicareLogo
    }" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; height:76px;weight:150px" ></a></td> 
                      </tr> 
                    </table></td> 
                  </tr> 
                </table></td>  
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#333333;width:600px" cellspacing="0" cellpadding="0" bgcolor="#333333" align="center"> 
             <tr style="border-collapse:collapse"> 
              <td style="Margin:0;padding-top:40px;padding-bottom:40px;padding-left:40px;padding-right:40px;background-image:url('https://jlbcxs.stripocdn.email/content/guids/CABINET_85e4431b39e3c4492fca561009cef9b5/images/93491522393929597.png');background-repeat:no-repeat" align="left" background="https://jlbcxs.stripocdn.email/content/guids/CABINET_85e4431b39e3c4492fca561009cef9b5/images/93491522393929597.png"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-bottom:10px;padding-top:40px"><h1 style="Margin:0;line-height:36px;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;font-size:30px;font-style:normal;font-weight:bold;color:#ffffff">New property assigned!</h1></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td esdev-links-color="#757575" align="center" style="Margin:0;padding-top:10px;padding-bottom:20px;padding-left:30px;padding-right:30px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#c5c5c5;font-size:15px"></p></td> 
                     </tr> 
                     <!-- <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:20px"><span class="es-button-border" style="border-style:solid;border-color:#26a4d3;background:none 0% 0% repeat scroll #26a4d3;border-width:0px;display:inline-block;border-radius:50px;width:auto"><a href="${domain}/login" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;transition:all 100ms ease-in;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:14px;border-style:solid;border-color:#26a4d3;border-width:15px 30px 15px 30px;display:inline-block;background:#26a4d3;border-radius:50px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:bold;font-style:normal;line-height:17px;width:auto;text-align:center">ACCESS ACCOUNT</a></span></td> 
                     </tr>  -->
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px"> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="padding:0;Margin:0;padding-top:40px;padding-left:40px;padding-right:40px"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     
                    <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-bottom:10px; "><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#000000;font-size:15px">Dear, ${
                        data.managerName
                      }</p></td> 
                     </tr>
                     <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-bottom:10px; "><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">You have been assigned a ${
                        data.companyName
                      }: ${data.propertyName}.<br>
                        All applications from the customers for this property will be assigned to you.
                        </p></td> 
                     </tr> 
                     <!-- <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">If that doesn't work, copy and paste the following link in your browser:<br></p></td> 
                     </tr>
\t\t\t\t\t<tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p href="${domain}/login" style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">${domain}/login<br></p></td> 
                     </tr>\t\t\t\t\t  -->
                     <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">Cheers,<br><strong>Team ${
                        data.companyName
                      }</strong></p></td> 
                     </tr>
                     <!-- <tr style="border-collapse:collapse margin-top: 20px"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px"><strong>Rentdigicare</strong></p></td> 
                     </tr>  -->
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
             
           </table></td> 
         </tr> 
       </table> 
     
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#292828;width:600px" cellspacing="0" cellpadding="0" bgcolor="#292828" align="center"> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="Margin:0;padding-top:30px;padding-bottom:30px;padding-left:40px;padding-right:40px"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;font-size:0"> 
                       <table class="es-table-not-adapt es-social" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                         <tr style="border-collapse:collapse"> 
                          <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px">
                            <a href="https://www.facebook.com/gskproperties"><img title="Facebook" src="https://jlbcxs.stripocdn.email/content/assets/img/social-icons/circle-white/facebook-circle-white.png" alt="Fb" width="24" height="24" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td> 
                          <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px">
                           <a href="https://www.instagram.com/gskproperties/"><img title="Instagram" src="https://jlbcxs.stripocdn.email/content/assets/img/social-icons/circle-white/instagram-circle-white.png" alt="Inst" width="24" height="24" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td> 
                         </tr> 
                       </table></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       <table cellpadding="0" cellspacing="0" class="es-footer" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-footer-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="Margin:0;padding-top:40px;padding-bottom:40px;padding-left:40px;padding-right:40px"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                    
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:18px;color:#666666;font-size:12px"> <a target="_blank" class="unsubscribe" href="#" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#666666;font-size:12px">Unsubscribe</a></p></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:18px;color:#666666;font-size:12px">Copyright © 2022 - All Rights Reserved.</p></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       </td> 
     </tr> 
   </table> 
  </div>  
 </body>
</html>
    `;
  }

  if (emailFor === "UPDATE_PROPERTY_MANAGER_PROPERTY") {
    return `
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" style="width:100%;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"> 
 <head> 
  <meta charset="UTF-8"> 
  <meta content="width=device-width, initial-scale=1" name="viewport"> 
  <meta name="x-apple-disable-message-reformatting"> 
  <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
  <meta content="telephone=no" name="format-detection"> 
  <title>New email template 2022-06-24</title><!--[if (mso 16)]>
    <style type="text/css">
    a {text-decoration: none;}
    </style>
    <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
<xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG></o:AllowPNG>
    <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
</xml>
<![endif]--><!--[if !mso]><!-- --> 
  <link href="https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i" rel="stylesheet"><!--<![endif]--> 
  <style type="text/css">
#outlook a {
\tpadding:0;
}
.ExternalClass {
\twidth:100%;
}
.ExternalClass,
.ExternalClass p,
.ExternalClass span,
.ExternalClass font,
.ExternalClass td,
.ExternalClass div {
\tline-height:100%;
}
.es-button {
\tmso-style-priority:100!important;
\ttext-decoration:none!important;
\ttransition:all 100ms ease-in;
}
a[x-apple-data-detectors] {
\tcolor:inherit!important;
\ttext-decoration:none!important;
\tfont-size:inherit!important;
\tfont-family:inherit!important;
\tfont-weight:inherit!important;
\tline-height:inherit!important;
}
.es-button:hover {
\tbackground:#555555!important;
\tborder-color:#555555!important;
}
.es-desk-hidden {
\tdisplay:none;
\tfloat:left;
\toverflow:hidden;
\twidth:0;
\tmax-height:0;
\tline-height:0;
\tmso-hide:all;
}
[data-ogsb] .es-button {
\tborder-width:0!important;
\tpadding:15px 30px 15px 30px!important;
}
[data-ogsb] .es-button.es-button-1 {
\tpadding:15px 25px!important;
}
@media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120%!important } h1 { font-size:30px!important; text-align:center } h2 { font-size:26px!important; text-align:left } h3 { font-size:20px!important; text-align:left } h1 a { text-align:center } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:30px!important } h2 a { text-align:left } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:20px!important } h3 a { text-align:left } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:17px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:17px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } a.es-button, button.es-button { font-size:14px!important; display:inline-block!important; border-width:15px 25px 15px 25px!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important } }
</style> 
 </head> 
 <body style="width:100%;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"> 
  <div class="es-wrapper-color" style="background-color:#F1F1F1"><!--[if gte mso 9]>
\t\t\t<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
\t\t\t\t<v:fill type="tile" color="#f1f1f1"></v:fill>
\t\t\t</v:background>
\t\t<![endif]--> 
   <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top"> 
     <tr style="border-collapse:collapse"> 
      <td valign="top" style="padding:0;Margin:0"> 
     
       <table cellpadding="0" cellspacing="0" class="es-header" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-header-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> 
             <tr style="border-collapse:collapse"> 
              <td style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:40px;padding-right:40px;background-color:#ffffff" bgcolor="#333333" align="left"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;font-size:0; "><a href="${gskDomain}" target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#FFFFFF;font-size:14px"><img src="${
      data.logo || rentdigicareLogo
    }" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; height:76px;weight:150px" ></a></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#333333;width:600px" cellspacing="0" cellpadding="0" bgcolor="#333333" align="center"> 
             <tr style="border-collapse:collapse"> 
              <td style="Margin:0;padding-top:10px;padding-bottom:40px;padding-left:40px;opacity:1;padding-right:40px;background-image:url('https://jlbcxs.stripocdn.email/content/guids/CABINET_85e4431b39e3c4492fca561009cef9b5/images/93491522393929597.png');background-repeat:no-repeat" align="left" background="https://jlbcxs.stripocdn.email/content/guids/CABINET_85e4431b39e3c4492fca561009cef9b5/images/93491522393929597.png"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-bottom:10px;padding-top:40px"><h1 style="Margin:0;line-height:36px;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;font-size:30px;font-style:normal;font-weight:bold;color:#ffffff">Update!</h1></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td esdev-links-color="#757575" align="center" style="Margin:0;padding-top:10px;padding-bottom:20px;padding-left:30px;padding-right:30px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#fffbfb;font-size:15px">Your Company '${
                        data.companyName
                      }' has update your properties.  
                       </p></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:20px"><span class="es-button-border" style="border-style:solid;border-color:#26a4d3;background:none 0% 0% repeat scroll #26a4d3;border-width:0px;display:inline-block;border-radius:50px;width:auto"><a href="${domain}/login" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;transition:all 100ms ease-in;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:14px;border-style:solid;border-color:#26a4d3;border-width:15px 30px 15px 30px;display:inline-block;background:#26a4d3;border-radius:50px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:bold;font-style:normal;line-height:17px;width:auto;text-align:center">ACCESS ACCOUNT</a></span></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px"> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="padding:0;Margin:0;padding-top:40px;padding-left:40px;padding-right:40px"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                    <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-bottom:10px; padding-top:15px;"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#000000;font-size:15px">Dear, ${
                        data.managerName
                      }</p></td>                       
                     </tr> 
               
                  

                     <tr>
                     <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px"><strong>Following properties have been removed :</strong>  <br>                
                    ${data.propertyName}
                      
                      </p>   
                     </tr>
                     </tr>
                     

    <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">Please contact your administrator if you have any query.<br></p></td> 
                    
                     
                     <!-- <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">If that doesn't work, copy and paste the following link in your browser:<br></p></td> 
                     </tr>
\t\t\t\t\t<tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p href="${domain}/login" style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">${domain}/login<br></p></td> 
                     </tr>\t\t\t\t\t  -->

                     <tr style="border-collapse:collapse"> 


                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">Cheers,<br><strong>Team ${
                        data.companyName
                      }</strong></p></td> 
                     </tr> 
                     <!-- <tr style="border-collapse:collapse margin-top: 20px"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px"><strong>Rentdigicare</strong></p></td> 
                     </tr>  -->
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
             
           </table></td> 
         </tr> 
       </table> 
     
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#292828;width:600px" cellspacing="0" cellpadding="0" bgcolor="#292828" align="center"> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="Margin:0;padding-top:30px;padding-bottom:30px;padding-left:40px;padding-right:40px"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;font-size:0"> 
                       <table class="es-table-not-adapt es-social" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                         <tr style="border-collapse:collapse"> 
                          <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px">
                            <a href="https://www.facebook.com/gskproperties"><img title="Facebook" src="https://jlbcxs.stripocdn.email/content/assets/img/social-icons/circle-white/facebook-circle-white.png" alt="Fb" width="24" height="24" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td> 
                          <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px">
                            <a href="https://www.instagram.com/gskproperties/"><img title="Instagram" src="https://jlbcxs.stripocdn.email/content/assets/img/social-icons/circle-white/instagram-circle-white.png" alt="Inst" width="24" height="24" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td> 
                         </tr> 
                       </table></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       <table cellpadding="0" cellspacing="0" class="es-footer" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-footer-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="Margin:0;padding-top:40px;padding-bottom:40px;padding-left:40px;padding-right:40px"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                    
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:18px;color:#666666;font-size:12px"> <a target="_blank" class="unsubscribe" href="#" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#666666;font-size:12px">Unsubscribe</a></p></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:18px;color:#666666;font-size:12px">Copyright © 2022 - All Rights Reserved.</p></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       </td> 
     </tr> 
   </table> 
  </div>  
 </body>
</html>
    `;
  }

  if (emailFor === "PROPERTY_MANAGER_PROFILE_UPDATE") {
    return `
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" style="width:100%;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"> 
 <head> 
  <meta charset="UTF-8"> 
  <meta content="width=device-width, initial-scale=1" name="viewport"> 
  <meta name="x-apple-disable-message-reformatting"> 
  <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
  <meta content="telephone=no" name="format-detection"> 
  <title>New email template 2022-06-24</title><!--[if (mso 16)]>
    <style type="text/css">
    a {text-decoration: none;}
    </style>
    <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
<xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG></o:AllowPNG>
    <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
</xml>
<![endif]--><!--[if !mso]><!-- --> 
  <link href="https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i" rel="stylesheet"><!--<![endif]--> 
  <style type="text/css">
#outlook a {
\tpadding:0;
}
.ExternalClass {
\twidth:100%;
}
.ExternalClass,
.ExternalClass p,
.ExternalClass span,
.ExternalClass font,
.ExternalClass td,
.ExternalClass div {
\tline-height:100%;
}
.es-button {
\tmso-style-priority:100!important;
\ttext-decoration:none!important;
\ttransition:all 100ms ease-in;
}
a[x-apple-data-detectors] {
\tcolor:inherit!important;
\ttext-decoration:none!important;
\tfont-size:inherit!important;
\tfont-family:inherit!important;
\tfont-weight:inherit!important;
\tline-height:inherit!important;
}
.es-button:hover {
\tbackground:#555555!important;
\tborder-color:#555555!important;
}
.es-desk-hidden {
\tdisplay:none;
\tfloat:left;
\toverflow:hidden;
\twidth:0;
\tmax-height:0;
\tline-height:0;
\tmso-hide:all;
}
[data-ogsb] .es-button {
\tborder-width:0!important;
\tpadding:15px 30px 15px 30px!important;
}
[data-ogsb] .es-button.es-button-1 {
\tpadding:15px 25px!important;
}
@media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120%!important } h1 { font-size:30px!important; text-align:center } h2 { font-size:26px!important; text-align:left } h3 { font-size:20px!important; text-align:left } h1 a { text-align:center } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:30px!important } h2 a { text-align:left } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:20px!important } h3 a { text-align:left } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:17px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:17px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } a.es-button, button.es-button { font-size:14px!important; display:inline-block!important; border-width:15px 25px 15px 25px!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important } }
</style> 
 </head> 
 <body style="width:100%;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"> 
  <div class="es-wrapper-color" style="background-color:#F1F1F1"><!--[if gte mso 9]>
\t\t\t<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
\t\t\t\t<v:fill type="tile" color="#f1f1f1"></v:fill>
\t\t\t</v:background>
\t\t<![endif]--> 
   <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top"> 
     <tr style="border-collapse:collapse"> 
      <td valign="top" style="padding:0;Margin:0"> 
     
       <table cellpadding="0" cellspacing="0" class="es-header" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-header-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> 
             <tr style="border-collapse:collapse"> 
              <td style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:40px;padding-right:40px;background-color:#ffffff" bgcolor="#333333" align="left"> 
                <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                  <tr style="border-collapse:collapse"> 
                   <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                    <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                      <tr style="border-collapse:collapse"> 
                       <td align="center" style="padding:0;Margin:0;font-size:0; "><a href="${gskDomain}" target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#ffffff;font-size:14px"><img src="${
      data.logo || rentdigicareLogo
    }" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; height:76px;weight:150px" ></a></td> 
                      </tr> 
                    </table></td> 
                  </tr> 
                </table></td>
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#333333;width:600px" cellspacing="0" cellpadding="0" bgcolor="#333333" align="center"> 
             <tr style="border-collapse:collapse"> 
              <td style="Margin:0;padding-top:40px;padding-bottom:40px;padding-left:40px;padding-right:40px;background-image:url('https://jlbcxs.stripocdn.email/content/guids/CABINET_85e4431b39e3c4492fca561009cef9b5/images/93491522393929597.png');background-repeat:no-repeat" align="left" background="https://jlbcxs.stripocdn.email/content/guids/CABINET_85e4431b39e3c4492fca561009cef9b5/images/93491522393929597.png"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-bottom:10px;padding-top:40px"><h1 style="Margin:0;line-height:36px;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;font-size:30px;font-style:normal;font-weight:bold;color:#ffffff">Your profile details have been updated successfully!</h1></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td esdev-links-color="#757575" align="center" style="Margin:0;padding-top:10px;padding-bottom:20px;padding-left:30px;padding-right:30px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#c5c5c5;font-size:15px"></p></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:20px"><span class="es-button-border" style="border-style:solid;border-color:#26a4d3;background:none 0% 0% repeat scroll #26a4d3;border-width:0px;display:inline-block;border-radius:50px;width:auto"><a href="${domain}/login" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;transition:all 100ms ease-in;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:14px;border-style:solid;border-color:#26a4d3;border-width:15px 30px 15px 30px;display:inline-block;background:#26a4d3;border-radius:50px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:bold;font-style:normal;line-height:17px;width:auto;text-align:center">ACCESS ACCOUNT</a></span></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px"> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="padding:0;Margin:0;padding-top:40px;padding-left:40px;padding-right:40px"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     
                    <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-bottom:10px; "><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#000000;font-size:15px">Dear, ${
                        data.managerName
                      }</p></td> 
                     </tr>
                     <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-bottom:10px; "><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">If the above "ACCESS ACCOUNT" button does not work, click on link below: <a href="${domain}/Login">${domain}/Login</a></p></td> 
                     </tr> 
                     <!-- <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">If that doesn't work, copy and paste the following link in your browser:<br></p></td> 
                     </tr>
\t\t\t\t\t<tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p href="${domain}/login" style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">${domain}/login<br></p></td> 
                     </tr>\t\t\t\t\t  -->
                     <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">Cheers,<br><strong>Team ${
                        data.companyName
                      }</strong></p></td> 
                     </tr>
                     <!-- <tr style="border-collapse:collapse margin-top: 20px"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px"><strong>Rentdigicare</strong></p></td> 
                     </tr>  -->
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
             
           </table></td> 
         </tr> 
       </table> 
     
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#292828;width:600px" cellspacing="0" cellpadding="0" bgcolor="#292828" align="center"> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="Margin:0;padding-top:30px;padding-bottom:30px;padding-left:40px;padding-right:40px"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;font-size:0"> 
                       <table class="es-table-not-adapt es-social" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                         <tr style="border-collapse:collapse"> 
                          <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px">
                            <a href="https://www.facebook.com/gskproperties"><img title="Facebook" src="https://jlbcxs.stripocdn.email/content/assets/img/social-icons/circle-white/facebook-circle-white.png" alt="Fb" width="24" height="24" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td> 
                          <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px">
                            <a href="https://www.instagram.com/gskproperties/"><img title="Instagram" src="https://jlbcxs.stripocdn.email/content/assets/img/social-icons/circle-white/instagram-circle-white.png" alt="Inst" width="24" height="24" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td> 
                         </tr> 
                       </table></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       <table cellpadding="0" cellspacing="0" class="es-footer" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-footer-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="Margin:0;padding-top:40px;padding-bottom:40px;padding-left:40px;padding-right:40px"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                    
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:18px;color:#666666;font-size:12px"> <a target="_blank" class="unsubscribe" href="#" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#666666;font-size:12px">Unsubscribe</a></p></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:18px;color:#666666;font-size:12px">Copyright © 2022 - All Rights Reserved.</p></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       </td> 
     </tr> 
   </table> 
  </div>  
 </body>
</html>
    `;
  }

  if (emailFor === "PROPERTY_MANAGER_RESET_PASSWORD") {
    return `
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" style="width:100%;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"> 
 <head> 
  <meta charset="UTF-8"> 
  <meta content="width=device-width, initial-scale=1" name="viewport"> 
  <meta name="x-apple-disable-message-reformatting"> 
  <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
  <meta content="telephone=no" name="format-detection"> 
  <title>New email template 2022-06-24</title><!--[if (mso 16)]>
    <style type="text/css">
    a {text-decoration: none;}
    </style>
    <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
<xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG></o:AllowPNG>
    <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
</xml>
<![endif]--><!--[if !mso]><!-- --> 
  <link href="https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i" rel="stylesheet"><!--<![endif]--> 
  <style type="text/css">
#outlook a {
\tpadding:0;
}
.ExternalClass {
\twidth:100%;
}
.ExternalClass,
.ExternalClass p,
.ExternalClass span,
.ExternalClass font,
.ExternalClass td,
.ExternalClass div {
\tline-height:100%;
}
.es-button {
\tmso-style-priority:100!important;
\ttext-decoration:none!important;
\ttransition:all 100ms ease-in;
}
a[x-apple-data-detectors] {
\tcolor:inherit!important;
\ttext-decoration:none!important;
\tfont-size:inherit!important;
\tfont-family:inherit!important;
\tfont-weight:inherit!important;
\tline-height:inherit!important;
}
.es-button:hover {
\tbackground:#555555!important;
\tborder-color:#555555!important;
}
.es-desk-hidden {
\tdisplay:none;
\tfloat:left;
\toverflow:hidden;
\twidth:0;
\tmax-height:0;
\tline-height:0;
\tmso-hide:all;
}
[data-ogsb] .es-button {
\tborder-width:0!important;
\tpadding:15px 30px 15px 30px!important;
}
[data-ogsb] .es-button.es-button-1 {
\tpadding:15px 25px!important;
}
@media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120%!important } h1 { font-size:30px!important; text-align:center } h2 { font-size:26px!important; text-align:left } h3 { font-size:20px!important; text-align:left } h1 a { text-align:center } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:30px!important } h2 a { text-align:left } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:20px!important } h3 a { text-align:left } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:17px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:17px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } a.es-button, button.es-button { font-size:14px!important; display:inline-block!important; border-width:15px 25px 15px 25px!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important } }
</style> 
 </head> 
 <body style="width:100%;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"> 
  <div class="es-wrapper-color" style="background-color:#F1F1F1"><!--[if gte mso 9]>
\t\t\t<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
\t\t\t\t<v:fill type="tile" color="#f1f1f1"></v:fill>
\t\t\t</v:background>
\t\t<![endif]--> 
   <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top"> 
     <tr style="border-collapse:collapse"> 
      <td valign="top" style="padding:0;Margin:0"> 
     
       <table cellpadding="0" cellspacing="0" class="es-header" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-header-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> 
             <tr style="border-collapse:collapse"> 
              <td style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:40px;padding-right:40px;background-color:#ffffff" bgcolor="#333333" align="left"> 
                <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                  <tr style="border-collapse:collapse"> 
                   <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                    <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                      <tr style="border-collapse:collapse"> 
                       <td align="center" style="padding:0;Margin:0;font-size:0; "><a href="${gskDomain}" target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#ffffff;font-size:14px"><img src="${
      data.logo || rentdigicareLogo
    }" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; height:76px;weight:150px" ></a></td> 
                      </tr> 
                    </table></td> 
                  </tr> 
                </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#333333;width:600px" cellspacing="0" cellpadding="0" bgcolor="#333333" align="center"> 
             <tr style="border-collapse:collapse"> 
              <td style="Margin:0;padding-top:40px;padding-bottom:40px;padding-left:40px;padding-right:40px;background-image:url('https://jlbcxs.stripocdn.email/content/guids/CABINET_85e4431b39e3c4492fca561009cef9b5/images/93491522393929597.png');background-repeat:no-repeat" align="left" background="https://jlbcxs.stripocdn.email/content/guids/CABINET_85e4431b39e3c4492fca561009cef9b5/images/93491522393929597.png"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-bottom:10px;padding-top:40px"><h1 style="Margin:0;line-height:36px;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;font-size:30px;font-style:normal;font-weight:bold;color:#ffffff">Password reset request!</h1></td> 
                     </tr> 
                     
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:20px"><span class="es-button-border" style="border-style:solid;border-color:#26a4d3;background:none 0% 0% repeat scroll #26a4d3;border-width:0px;display:inline-block;border-radius:50px;width:auto"><a href="${
                        data.resetLink
                      }" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;transition:all 100ms ease-in;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:14px;border-style:solid;border-color:#26a4d3;border-width:15px 30px 15px 30px;display:inline-block;background:#26a4d3;border-radius:50px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:bold;font-style:normal;line-height:17px;width:auto;text-align:center">RESET PASSWORD</a></span></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px"> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="padding:0;Margin:0;padding-top:40px;padding-left:40px;padding-right:40px"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                    <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-bottom:10px; "><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">Dear, ${
                        data.managerName
                      }</p></td> 
                     </tr> 
                    <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-bottom:10px; "><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">Request to reset the password for the admin account associated with ${
                        data.email
                      } has been received.<br>No changes have been made to your account yet.</p></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-bottom:10px; "><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">If the above "RESET PASSWORD" button does not work, click on link below:<br> <a href=${
                        data.resetLink
                      }>${data.resetLink}</a></p></td> 
                     </tr> 
                     <!-- <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">If that doesn't work, copy and paste the following link in your browser:<br></p></td> 
                     </tr>
\t\t\t\t\t<tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p href="${domain}/login" style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">${domain}/login<br></p></td> 
                     </tr>\t\t\t\t\t  -->
                     <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">Cheers,<br><strong>Team ${
                        data.companyName
                      }</strong></p></td> 
                     </tr> 
                     <!-- <tr style="border-collapse:collapse margin-top: 20px"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px"><strong>Rentdigicare</strong></p></td> 
                     </tr>  -->
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
             
           </table></td> 
         </tr> 
       </table> 
     
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#292828;width:600px" cellspacing="0" cellpadding="0" bgcolor="#292828" align="center"> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="Margin:0;padding-top:30px;padding-bottom:30px;padding-left:40px;padding-right:40px"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;font-size:0"> 
                       <table class="es-table-not-adapt es-social" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                         <tr style="border-collapse:collapse"> 
                          <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px">
                           <a href="https://www.facebook.com/Rentdigi/"><img title="Facebook" src="https://jlbcxs.stripocdn.email/content/assets/img/social-icons/circle-white/facebook-circle-white.png" alt="Fb" width="24" height="24" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td> 
                          <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px">
                           <a href="https://www.instagram.com/rentdigi/"><img title="Instagram" src="https://jlbcxs.stripocdn.email/content/assets/img/social-icons/circle-white/instagram-circle-white.png" alt="Inst" width="24" height="24" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td> 
                         </tr> 
                       </table></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       <table cellpadding="0" cellspacing="0" class="es-footer" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-footer-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="Margin:0;padding-top:40px;padding-bottom:40px;padding-left:40px;padding-right:40px"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                    
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:18px;color:#666666;font-size:12px"> <a target="_blank" class="unsubscribe" href="#" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#666666;font-size:12px">Unsubscribe</a></p></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:18px;color:#666666;font-size:12px">Copyright © 2022 - All Rights Reserved.</p></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       </td> 
     </tr> 
   </table> 
  </div>  
 </body>
</html>
    `;
  }

  if (emailFor === "SUPER_ADMIN_PASSWORD_CHANGE") {
    return `
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" style="width:100%;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"> 
 <head> 
  <meta charset="UTF-8"> 
  <meta content="width=device-width, initial-scale=1" name="viewport"> 
  <meta name="x-apple-disable-message-reformatting"> 
  <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
  <meta content="telephone=no" name="format-detection"> 
  <title>New email template 2022-06-24</title><!--[if (mso 16)]>
    <style type="text/css">
    a {text-decoration: none;}
    </style>
    <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
<xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG></o:AllowPNG>
    <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
</xml>
<![endif]--><!--[if !mso]><!-- --> 
  <link href="https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i" rel="stylesheet"><!--<![endif]--> 
  <style type="text/css">
#outlook a {
\tpadding:0;
}
.ExternalClass {
\twidth:100%;
}
.ExternalClass,
.ExternalClass p,
.ExternalClass span,
.ExternalClass font,
.ExternalClass td,
.ExternalClass div {
\tline-height:100%;
}
.es-button {
\tmso-style-priority:100!important;
\ttext-decoration:none!important;
\ttransition:all 100ms ease-in;
}
a[x-apple-data-detectors] {
\tcolor:inherit!important;
\ttext-decoration:none!important;
\tfont-size:inherit!important;
\tfont-family:inherit!important;
\tfont-weight:inherit!important;
\tline-height:inherit!important;
}
.es-button:hover {
\tbackground:#555555!important;
\tborder-color:#555555!important;
}
.es-desk-hidden {
\tdisplay:none;
\tfloat:left;
\toverflow:hidden;
\twidth:0;
\tmax-height:0;
\tline-height:0;
\tmso-hide:all;
}
[data-ogsb] .es-button {
\tborder-width:0!important;
\tpadding:15px 30px 15px 30px!important;
}
[data-ogsb] .es-button.es-button-1 {
\tpadding:15px 25px!important;
}
@media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120%!important } h1 { font-size:30px!important; text-align:center } h2 { font-size:26px!important; text-align:left } h3 { font-size:20px!important; text-align:left } h1 a { text-align:center } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:30px!important } h2 a { text-align:left } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:20px!important } h3 a { text-align:left } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:17px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:17px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } a.es-button, button.es-button { font-size:14px!important; display:inline-block!important; border-width:15px 25px 15px 25px!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important } }
</style> 
 </head> 
 <body style="width:100%;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"> 
  <div class="es-wrapper-color" style="background-color:#F1F1F1"><!--[if gte mso 9]>
\t\t\t<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
\t\t\t\t<v:fill type="tile" color="#f1f1f1"></v:fill>
\t\t\t</v:background>
\t\t<![endif]--> 
   <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top"> 
     <tr style="border-collapse:collapse"> 
      <td valign="top" style="padding:0;Margin:0"> 
     
       <table cellpadding="0" cellspacing="0" class="es-header" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-header-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> 
             <tr style="border-collapse:collapse"> 
              <td style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:40px;padding-right:40px;background-color:#ffffff" bgcolor="#333333" align="left"> 
                <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                  <tr style="border-collapse:collapse"> 
                   <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                    <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                      <tr style="border-collapse:collapse"> 
                       <td align="center" style="padding:0;Margin:0;font-size:0; "><a  target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#ffffff;font-size:14px"><img src="${rentdigicareLogo}" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; height:76px;weight:150px" ></a></td> 
                      </tr> 
                    </table></td> 
                  </tr> 
                </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#333333;width:600px" cellspacing="0" cellpadding="0" bgcolor="#333333" align="center"> 
             <tr style="border-collapse:collapse"> 
              <td style="Margin:0;padding-top:40px;padding-bottom:40px;padding-left:40px;padding-right:40px;background-image:url('https://jlbcxs.stripocdn.email/content/guids/CABINET_85e4431b39e3c4492fca561009cef9b5/images/93491522393929597.png');background-repeat:no-repeat" align="left" background="https://jlbcxs.stripocdn.email/content/guids/CABINET_85e4431b39e3c4492fca561009cef9b5/images/93491522393929597.png"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-bottom:10px;padding-top:40px"><h1 style="Margin:0;line-height:36px;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;font-size:30px;font-style:normal;font-weight:bold;color:#ffffff">Your password has been changed successfully!</h1></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td esdev-links-color="#757575" align="center" style="Margin:0;padding-top:10px;padding-bottom:20px;padding-left:30px;padding-right:30px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#c5c5c5;font-size:15px"></p></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:20px"><span class="es-button-border" style="border-style:solid;border-color:#26a4d3;background:none 0% 0% repeat scroll #26a4d3;border-width:0px;display:inline-block;border-radius:50px;width:auto"><a href="${domain}/sadmin" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;transition:all 100ms ease-in;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:14px;border-style:solid;border-color:#26a4d3;border-width:15px 30px 15px 30px;display:inline-block;background:#26a4d3;border-radius:50px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:bold;font-style:normal;line-height:17px;width:auto;text-align:center">ACCESS ACCOUNT</a></span></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px"> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="padding:0;Margin:0;padding-top:40px;padding-left:40px;padding-right:40px"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     
                    <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-bottom:10px; "><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#000000;font-size:15px">Dear, ${data.adminName}</p></td> 
                     </tr>
                     <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-bottom:10px; "><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">If the above "ACCESS ACCOUNT" button does not work, click on link below: <a href="${domain}/sadmin">${domain}/sadmin</a></p></td> 
                     </tr>  
                     <!-- <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">If that doesn't work, copy and paste the following link in your browser:<br></p></td> 
                     </tr>
\t\t\t\t\t<tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p href="${domain}/login" style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">${domain}/login<br></p></td> 
                     </tr>\t\t\t\t\t  -->
                     <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">Cheers,<br><strong>Team Rentdigicare</strong></p></td> 
                     </tr>
                     <!-- <tr style="border-collapse:collapse margin-top: 20px"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px"><strong>Rentdigicare</strong></p></td> 
                     </tr>  -->
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
             
           </table></td> 
         </tr> 
       </table> 
     
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#292828;width:600px" cellspacing="0" cellpadding="0" bgcolor="#292828" align="center"> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="Margin:0;padding-top:30px;padding-bottom:30px;padding-left:40px;padding-right:40px"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;font-size:0"> 
                       <table class="es-table-not-adapt es-social" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                         <tr style="border-collapse:collapse"> 
                          <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px">
                           <a href="https://www.facebook.com/Rentdigi/"><img title="Facebook" src="https://jlbcxs.stripocdn.email/content/assets/img/social-icons/circle-white/facebook-circle-white.png" alt="Fb" width="24" height="24" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td> 
                          <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px">
                           <a href="https://www.instagram.com/rentdigi/"><img title="Instagram" src="https://jlbcxs.stripocdn.email/content/assets/img/social-icons/circle-white/instagram-circle-white.png" alt="Inst" width="24" height="24" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td> 
                         </tr> 
                       </table></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       <table cellpadding="0" cellspacing="0" class="es-footer" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-footer-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="Margin:0;padding-top:40px;padding-bottom:40px;padding-left:40px;padding-right:40px"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                    
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:18px;color:#666666;font-size:12px"> <a target="_blank" class="unsubscribe" href="#" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#666666;font-size:12px">Unsubscribe</a></p></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:18px;color:#666666;font-size:12px">Copyright © 2022 - All Rights Reserved.</p></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       </td> 
     </tr> 
   </table> 
  </div>  
 </body>
</html>
    `;
  }

  if (emailFor === "SUPER_ADMIN_RESET_PASSWORD") {
    return `
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" style="width:100%;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"> 
 <head> 
  <meta charset="UTF-8"> 
  <meta content="width=device-width, initial-scale=1" name="viewport"> 
  <meta name="x-apple-disable-message-reformatting"> 
  <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
  <meta content="telephone=no" name="format-detection"> 
  <title>New email template 2022-06-24</title><!--[if (mso 16)]>
    <style type="text/css">
    a {text-decoration: none;}
    </style>
    <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
<xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG></o:AllowPNG>
    <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
</xml>
<![endif]--><!--[if !mso]><!-- --> 
  <link href="https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i" rel="stylesheet"><!--<![endif]--> 
  <style type="text/css">
#outlook a {
\tpadding:0;
}
.ExternalClass {
\twidth:100%;
}
.ExternalClass,
.ExternalClass p,
.ExternalClass span,
.ExternalClass font,
.ExternalClass td,
.ExternalClass div {
\tline-height:100%;
}
.es-button {
\tmso-style-priority:100!important;
\ttext-decoration:none!important;
\ttransition:all 100ms ease-in;
}
a[x-apple-data-detectors] {
\tcolor:inherit!important;
\ttext-decoration:none!important;
\tfont-size:inherit!important;
\tfont-family:inherit!important;
\tfont-weight:inherit!important;
\tline-height:inherit!important;
}
.es-button:hover {
\tbackground:#555555!important;
\tborder-color:#555555!important;
}
.es-desk-hidden {
\tdisplay:none;
\tfloat:left;
\toverflow:hidden;
\twidth:0;
\tmax-height:0;
\tline-height:0;
\tmso-hide:all;
}
[data-ogsb] .es-button {
\tborder-width:0!important;
\tpadding:15px 30px 15px 30px!important;
}
[data-ogsb] .es-button.es-button-1 {
\tpadding:15px 25px!important;
}
@media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120%!important } h1 { font-size:30px!important; text-align:center } h2 { font-size:26px!important; text-align:left } h3 { font-size:20px!important; text-align:left } h1 a { text-align:center } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:30px!important } h2 a { text-align:left } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:20px!important } h3 a { text-align:left } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:17px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:17px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } a.es-button, button.es-button { font-size:14px!important; display:inline-block!important; border-width:15px 25px 15px 25px!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important } }
</style> 
 </head> 
 <body style="width:100%;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"> 
  <div class="es-wrapper-color" style="background-color:#F1F1F1"><!--[if gte mso 9]>
\t\t\t<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
\t\t\t\t<v:fill type="tile" color="#f1f1f1"></v:fill>
\t\t\t</v:background>
\t\t<![endif]--> 
   <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top"> 
     <tr style="border-collapse:collapse"> 
      <td valign="top" style="padding:0;Margin:0"> 
     
       <table cellpadding="0" cellspacing="0" class="es-header" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-header-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> 
             <tr style="border-collapse:collapse"> 
              <td style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:40px;padding-right:40px;background-color:#ffffff" bgcolor="#333333" align="left"> 
                <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                  <tr style="border-collapse:collapse"> 
                   <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                    <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                      <tr style="border-collapse:collapse"> 
                       <td align="center" style="padding:0;Margin:0;font-size:0; "><a  target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#ffffff;font-size:14px"><img src="${rentdigicareLogo}" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; height:76px;weight:150px" ></a></td> 
                      </tr> 
                    </table></td> 
                  </tr> 
                </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#333333;width:600px" cellspacing="0" cellpadding="0" bgcolor="#333333" align="center"> 
             <tr style="border-collapse:collapse"> 
              <td style="Margin:0;padding-top:40px;padding-bottom:40px;padding-left:40px;padding-right:40px;background-image:url('https://jlbcxs.stripocdn.email/content/guids/CABINET_85e4431b39e3c4492fca561009cef9b5/images/93491522393929597.png');background-repeat:no-repeat" align="left" background="https://jlbcxs.stripocdn.email/content/guids/CABINET_85e4431b39e3c4492fca561009cef9b5/images/93491522393929597.png"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-bottom:10px;padding-top:40px"><h1 style="Margin:0;line-height:36px;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;font-size:30px;font-style:normal;font-weight:bold;color:#ffffff">Password reset request!</h1></td> 
                     </tr> 
                     
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:20px"><span class="es-button-border" style="border-style:solid;border-color:#26a4d3;background:none 0% 0% repeat scroll #26a4d3;border-width:0px;display:inline-block;border-radius:50px;width:auto"><a href="${data.resetLink}" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;transition:all 100ms ease-in;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:14px;border-style:solid;border-color:#26a4d3;border-width:15px 30px 15px 30px;display:inline-block;background:#26a4d3;border-radius:50px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:bold;font-style:normal;line-height:17px;width:auto;text-align:center">RESET PASSWORD</a></span></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px"> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="padding:0;Margin:0;padding-top:40px;padding-left:40px;padding-right:40px"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                    <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-bottom:10px; "><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">Dear, ${data.adminName}</p></td> 
                     </tr> 
                    <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-bottom:10px; "><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">Request to reset the password for the admin account associated with ${data.email} has been received.<br>No changes have been made to your account yet.</p></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-bottom:10px; "><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">If the above "RESET PASSWORD" button does not work, click on link below:<br> <a href=${data.resetLink}>${data.resetLink}</a></p></td> 
                     </tr> 
                     <!-- <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">If that doesn't work, copy and paste the following link in your browser:<br></p></td> 
                     </tr>
\t\t\t\t\t<tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p href="${domain}/login" style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">${domain}/login<br></p></td> 
                     </tr>\t\t\t\t\t  -->
                     <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">Cheers,<br><strong>Team Rentdigicare</strong></p></td> 
                     </tr> 
                     <!-- <tr style="border-collapse:collapse margin-top: 20px"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px"><strong>Rentdigicare</strong></p></td> 
                     </tr>  -->
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
             
           </table></td> 
         </tr> 
       </table> 
     
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#292828;width:600px" cellspacing="0" cellpadding="0" bgcolor="#292828" align="center"> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="Margin:0;padding-top:30px;padding-bottom:30px;padding-left:40px;padding-right:40px"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;font-size:0"> 
                       <table class="es-table-not-adapt es-social" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                         <tr style="border-collapse:collapse"> 
                          <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px">
                           <a href="https://www.facebook.com/Rentdigi/"><img title="Facebook" src="https://jlbcxs.stripocdn.email/content/assets/img/social-icons/circle-white/facebook-circle-white.png" alt="Fb" width="24" height="24" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td> 
                          <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px">
                           <a href="https://www.instagram.com/rentdigi/"><img title="Instagram" src="https://jlbcxs.stripocdn.email/content/assets/img/social-icons/circle-white/instagram-circle-white.png" alt="Inst" width="24" height="24" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td> 
                         </tr> 
                       </table></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       <table cellpadding="0" cellspacing="0" class="es-footer" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-footer-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="Margin:0;padding-top:40px;padding-bottom:40px;padding-left:40px;padding-right:40px"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                    
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:18px;color:#666666;font-size:12px"> <a target="_blank" class="unsubscribe" href="#" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#666666;font-size:12px">Unsubscribe</a></p></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:18px;color:#666666;font-size:12px">Copyright © 2022 - All Rights Reserved.</p></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       </td> 
     </tr> 
   </table> 
  </div>  
 </body>
</html>
    `;
  }

  if (emailFor === "SUPER_ADMIN_PROFILE_UPDATE") {
    return `
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" style="width:100%;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"> 
 <head> 
  <meta charset="UTF-8"> 
  <meta content="width=device-width, initial-scale=1" name="viewport"> 
  <meta name="x-apple-disable-message-reformatting"> 
  <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
  <meta content="telephone=no" name="format-detection"> 
  <title>New email template 2022-06-24</title><!--[if (mso 16)]>
    <style type="text/css">
    a {text-decoration: none;}
    </style>
    <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
<xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG></o:AllowPNG>
    <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
</xml>
<![endif]--><!--[if !mso]><!-- --> 
  <link href="https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i" rel="stylesheet"><!--<![endif]--> 
  <style type="text/css">
#outlook a {
\tpadding:0;
}
.ExternalClass {
\twidth:100%;
}
.ExternalClass,
.ExternalClass p,
.ExternalClass span,
.ExternalClass font,
.ExternalClass td,
.ExternalClass div {
\tline-height:100%;
}
.es-button {
\tmso-style-priority:100!important;
\ttext-decoration:none!important;
\ttransition:all 100ms ease-in;
}
a[x-apple-data-detectors] {
\tcolor:inherit!important;
\ttext-decoration:none!important;
\tfont-size:inherit!important;
\tfont-family:inherit!important;
\tfont-weight:inherit!important;
\tline-height:inherit!important;
}
.es-button:hover {
\tbackground:#555555!important;
\tborder-color:#555555!important;
}
.es-desk-hidden {
\tdisplay:none;
\tfloat:left;
\toverflow:hidden;
\twidth:0;
\tmax-height:0;
\tline-height:0;
\tmso-hide:all;
}
[data-ogsb] .es-button {
\tborder-width:0!important;
\tpadding:15px 30px 15px 30px!important;
}
[data-ogsb] .es-button.es-button-1 {
\tpadding:15px 25px!important;
}
@media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120%!important } h1 { font-size:30px!important; text-align:center } h2 { font-size:26px!important; text-align:left } h3 { font-size:20px!important; text-align:left } h1 a { text-align:center } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:30px!important } h2 a { text-align:left } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:20px!important } h3 a { text-align:left } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:17px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:17px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } a.es-button, button.es-button { font-size:14px!important; display:inline-block!important; border-width:15px 25px 15px 25px!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important } }
</style> 
 </head> 
 <body style="width:100%;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"> 
  <div class="es-wrapper-color" style="background-color:#F1F1F1"><!--[if gte mso 9]>
\t\t\t<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
\t\t\t\t<v:fill type="tile" color="#f1f1f1"></v:fill>
\t\t\t</v:background>
\t\t<![endif]--> 
   <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top"> 
     <tr style="border-collapse:collapse"> 
      <td valign="top" style="padding:0;Margin:0"> 
     
       <table cellpadding="0" cellspacing="0" class="es-header" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-header-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> 
             <tr style="border-collapse:collapse"> 
              <td style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:40px;padding-right:40px;background-color:#ffffff" bgcolor="#333333" align="left"> 
                <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                  <tr style="border-collapse:collapse"> 
                   <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                    <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                      <tr style="border-collapse:collapse"> 
                       <td align="center" style="padding:0;Margin:0;font-size:0; "><a  target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#ffffff;font-size:14px"><img src="${rentdigicareLogo}" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; height:76px;weight:150px" ></a></td> 
                      </tr> 
                    </table></td> 
                  </tr> 
                </table></td>
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#333333;width:600px" cellspacing="0" cellpadding="0" bgcolor="#333333" align="center"> 
             <tr style="border-collapse:collapse"> 
              <td style="Margin:0;padding-top:40px;padding-bottom:40px;padding-left:40px;padding-right:40px;background-image:url('https://jlbcxs.stripocdn.email/content/guids/CABINET_85e4431b39e3c4492fca561009cef9b5/images/93491522393929597.png');background-repeat:no-repeat" align="left" background="https://jlbcxs.stripocdn.email/content/guids/CABINET_85e4431b39e3c4492fca561009cef9b5/images/93491522393929597.png"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-bottom:10px;padding-top:40px"><h1 style="Margin:0;line-height:36px;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;font-size:30px;font-style:normal;font-weight:bold;color:#ffffff">Your profile details have been updated successfully!</h1></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td esdev-links-color="#757575" align="center" style="Margin:0;padding-top:10px;padding-bottom:20px;padding-left:30px;padding-right:30px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#c5c5c5;font-size:15px"></p></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:20px"><span class="es-button-border" style="border-style:solid;border-color:#26a4d3;background:none 0% 0% repeat scroll #26a4d3;border-width:0px;display:inline-block;border-radius:50px;width:auto"><a href="${domain}/sadmin" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;transition:all 100ms ease-in;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:14px;border-style:solid;border-color:#26a4d3;border-width:15px 30px 15px 30px;display:inline-block;background:#26a4d3;border-radius:50px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:bold;font-style:normal;line-height:17px;width:auto;text-align:center">ACCESS ACCOUNT</a></span></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px"> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="padding:0;Margin:0;padding-top:40px;padding-left:40px;padding-right:40px"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     
                    <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-bottom:10px; "><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#000000;font-size:15px">Dear, ${data.adminName}</p></td> 
                     </tr>
                     <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-bottom:10px; "><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">If the above "ACCESS ACCOUNT" button does not work, click on link below: <a href="${domain}/sadmin">${domain}/sadmin</a></p></td> 
                     </tr> 
                     <!-- <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">If that doesn't work, copy and paste the following link in your browser:<br></p></td> 
                     </tr>
\t\t\t\t\t<tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p href="${domain}/login" style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">${domain}/login<br></p></td> 
                     </tr>\t\t\t\t\t  -->
                     <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">Cheers,<br><strong>Team Rentdigicare</strong></p></td> 
                     </tr>
                     <!-- <tr style="border-collapse:collapse margin-top: 20px"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px"><strong>Rentdigicare</strong></p></td> 
                     </tr>  -->
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
             
           </table></td> 
         </tr> 
       </table> 
     
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#292828;width:600px" cellspacing="0" cellpadding="0" bgcolor="#292828" align="center"> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="Margin:0;padding-top:30px;padding-bottom:30px;padding-left:40px;padding-right:40px"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;font-size:0"> 
                       <table class="es-table-not-adapt es-social" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                         <tr style="border-collapse:collapse"> 
                          <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px">
                           <a href="https://www.facebook.com/Rentdigi/"><img title="Facebook" src="https://jlbcxs.stripocdn.email/content/assets/img/social-icons/circle-white/facebook-circle-white.png" alt="Fb" width="24" height="24" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td> 
                          <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px">
                           <a href="https://www.instagram.com/rentdigi/"><img title="Instagram" src="https://jlbcxs.stripocdn.email/content/assets/img/social-icons/circle-white/instagram-circle-white.png" alt="Inst" width="24" height="24" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td> 
                         </tr> 
                       </table></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       <table cellpadding="0" cellspacing="0" class="es-footer" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-footer-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="Margin:0;padding-top:40px;padding-bottom:40px;padding-left:40px;padding-right:40px"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                    
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:18px;color:#666666;font-size:12px"> <a target="_blank" class="unsubscribe" href="#" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#666666;font-size:12px">Unsubscribe</a></p></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:18px;color:#666666;font-size:12px">Copyright © 2022 - All Rights Reserved.</p></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       </td> 
     </tr> 
   </table> 
  </div>  
 </body>
</html>
    `;
  }

  if (emailFor === "SEND_LOGIN_OTP") {
    return `
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" style="width:100%;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"> 
 <head> 
  <meta charset="UTF-8"> 
  <meta content="width=device-width, initial-scale=1" name="viewport"> 
  <meta name="x-apple-disable-message-reformatting"> 
  <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
  <meta content="telephone=no" name="format-detection"> 
  <title>New email template 2022-06-24</title><!--[if (mso 16)]>
    <style type="text/css">
    a {text-decoration: none;}
    </style>
    <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
<xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG></o:AllowPNG>
    <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
</xml>
<![endif]--><!--[if !mso]><!-- --> 
  <link href="https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i" rel="stylesheet"><!--<![endif]--> 
  <style type="text/css">
#outlook a {
\tpadding:0;
}
.ExternalClass {
\twidth:100%;
}
.ExternalClass,
.ExternalClass p,
.ExternalClass span,
.ExternalClass font,
.ExternalClass td,
.ExternalClass div {
\tline-height:100%;
}
.es-button {
\tmso-style-priority:100!important;
\ttext-decoration:none!important;
\ttransition:all 100ms ease-in;
}
a[x-apple-data-detectors] {
\tcolor:inherit!important;
\ttext-decoration:none!important;
\tfont-size:inherit!important;
\tfont-family:inherit!important;
\tfont-weight:inherit!important;
\tline-height:inherit!important;
}
.es-button:hover {
\tbackground:#555555!important;
\tborder-color:#555555!important;
}
.es-desk-hidden {
\tdisplay:none;
\tfloat:left;
\toverflow:hidden;
\twidth:0;
\tmax-height:0;
\tline-height:0;
\tmso-hide:all;
}
[data-ogsb] .es-button {
\tborder-width:0!important;
\tpadding:15px 30px 15px 30px!important;
}
[data-ogsb] .es-button.es-button-1 {
\tpadding:15px 25px!important;
}
@media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120%!important } h1 { font-size:30px!important; text-align:center } h2 { font-size:26px!important; text-align:left } h3 { font-size:20px!important; text-align:left } h1 a { text-align:center } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:30px!important } h2 a { text-align:left } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:20px!important } h3 a { text-align:left } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:17px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:17px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } a.es-button, button.es-button { font-size:14px!important; display:inline-block!important; border-width:15px 25px 15px 25px!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important } }
</style> 
 </head> 
 <body style="width:100%;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"> 
  <div class="es-wrapper-color" style="background-color:#F1F1F1"><!--[if gte mso 9]>
\t\t\t<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
\t\t\t\t<v:fill type="tile" color="#f1f1f1"></v:fill>
\t\t\t</v:background>
\t\t<![endif]--> 
   <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top"> 
     <tr style="border-collapse:collapse"> 
      <td valign="top" style="padding:0;Margin:0"> 
     
       <table cellpadding="0" cellspacing="0" class="es-header" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-header-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> 
             <tr style="border-collapse:collapse"> 
              <td style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:40px;padding-right:40px;background-color:#ffffff" bgcolor="#333333" align="left"> 
                <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                  <tr style="border-collapse:collapse"> 
                   <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                    <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                      <tr style="border-collapse:collapse"> 
                       <td align="center" style="padding:0;Margin:0;font-size:0; "><a  target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#ffffff;font-size:14px"><img src="${rentdigicareLogo}" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; height:76px;weight:150px" ></a></td> 
                      </tr> 
                    </table></td> 
                  </tr> 
                </table></td>
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#333333;width:600px" cellspacing="0" cellpadding="0" bgcolor="#333333" align="center"> 
             <tr style="border-collapse:collapse"> 
              <td style="Margin:0;padding-top:40px;padding-bottom:40px;padding-left:40px;padding-right:40px;background-image:url('https://jlbcxs.stripocdn.email/content/guids/CABINET_85e4431b39e3c4492fca561009cef9b5/images/93491522393929597.png');background-repeat:no-repeat" align="left" background="https://jlbcxs.stripocdn.email/content/guids/CABINET_85e4431b39e3c4492fca561009cef9b5/images/93491522393929597.png"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-bottom:10px;padding-top:40px"><h1 style="Margin:0;line-height:36px;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;font-size:30px;font-style:normal;font-weight:bold;color:#ffffff">Your One Time Password</h1></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td esdev-links-color="#757575" align="center" style="Margin:0;padding-top:10px;padding-bottom:20px;padding-left:30px;padding-right:30px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#c5c5c5;font-size:15px"></p></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:20px"><span class="es-button-border" style="border-style:solid;border-color:#26a4d3;background:none 0% 0% repeat scroll #26a4d3;border-width:0px;display:inline-block;border-radius:50px;width:auto"><a href="${data.verificationLink}" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;transition:all 100ms ease-in;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:14px;border-style:solid;border-color:#26a4d3;border-width:15px 30px 15px 30px;display:inline-block;background:#26a4d3;border-radius:50px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:bold;font-style:normal;line-height:17px;width:auto;text-align:center">ACCESS ACCOUNT</a></span></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px"> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="padding:0;Margin:0;padding-top:40px;padding-left:40px;padding-right:40px"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     
                    <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-bottom:10px; "><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#000000;font-size:15px">Your One Time Password is:  <strong>${data.verificationCode}</strong></p></td> 
                     </tr>
                     <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-bottom:10px; "><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">Or You can go to this link to enter OTP: <a href="${data.verificationLink}">${data.verificationLink}</a></p></td> 
                     </tr> 
                     <!-- <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">If that doesn't work, copy and paste the following link in your browser:<br></p></td> 
                     </tr>
\t\t\t\t\t<tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p href="${domain}/login" style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">${domain}/login<br></p></td> 
                     </tr>\t\t\t\t\t  -->
                     <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">Cheers,<br><strong>Team Rentdigicare</strong></p></td> 
                     </tr>
                     <!-- <tr style="border-collapse:collapse margin-top: 20px"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px"><strong>Rentdigicare</strong></p></td> 
                     </tr>  -->
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
             
           </table></td> 
         </tr> 
       </table> 
     
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#292828;width:600px" cellspacing="0" cellpadding="0" bgcolor="#292828" align="center"> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="Margin:0;padding-top:30px;padding-bottom:30px;padding-left:40px;padding-right:40px"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;font-size:0"> 
                       <table class="es-table-not-adapt es-social" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                         <tr style="border-collapse:collapse"> 
                          <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px">
                            <a href="https://www.facebook.com/gskproperties"><img title="Facebook" src="https://jlbcxs.stripocdn.email/content/assets/img/social-icons/circle-white/facebook-circle-white.png" alt="Fb" width="24" height="24" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td> 
                          <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px">
                           <a href="https://www.instagram.com/gskproperties/"><img title="Instagram" src="https://jlbcxs.stripocdn.email/content/assets/img/social-icons/circle-white/instagram-circle-white.png" alt="Inst" width="24" height="24" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td> 
                         </tr> 
                       </table></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       <table cellpadding="0" cellspacing="0" class="es-footer" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-footer-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="Margin:0;padding-top:40px;padding-bottom:40px;padding-left:40px;padding-right:40px"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                    
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:18px;color:#666666;font-size:12px"> <a target="_blank" class="unsubscribe" href="#" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#666666;font-size:12px">Unsubscribe</a></p></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:18px;color:#666666;font-size:12px">Copyright © 2022 - All Rights Reserved.</p></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       </td> 
     </tr> 
   </table> 
  </div>  
 </body>
</html>
    `;
  }

  if (emailFor === "DISABLE_2FA") {
    return `
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" style="width:100%;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"> 
 <head> 
  <meta charset="UTF-8"> 
  <meta content="width=device-width, initial-scale=1" name="viewport"> 
  <meta name="x-apple-disable-message-reformatting"> 
  <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
  <meta content="telephone=no" name="format-detection"> 
  <title>New email template 2022-06-24</title><!--[if (mso 16)]>
    <style type="text/css">
    a {text-decoration: none;}
    </style>
    <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
<xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG></o:AllowPNG>
    <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
</xml>
<![endif]--><!--[if !mso]><!-- --> 
  <link href="https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i" rel="stylesheet"><!--<![endif]--> 
  <style type="text/css">
#outlook a {
\tpadding:0;
}
.ExternalClass {
\twidth:100%;
}
.ExternalClass,
.ExternalClass p,
.ExternalClass span,
.ExternalClass font,
.ExternalClass td,
.ExternalClass div {
\tline-height:100%;
}
.es-button {
\tmso-style-priority:100!important;
\ttext-decoration:none!important;
\ttransition:all 100ms ease-in;
}
a[x-apple-data-detectors] {
\tcolor:inherit!important;
\ttext-decoration:none!important;
\tfont-size:inherit!important;
\tfont-family:inherit!important;
\tfont-weight:inherit!important;
\tline-height:inherit!important;
}
.es-button:hover {
\tbackground:#555555!important;
\tborder-color:#555555!important;
}
.es-desk-hidden {
\tdisplay:none;
\tfloat:left;
\toverflow:hidden;
\twidth:0;
\tmax-height:0;
\tline-height:0;
\tmso-hide:all;
}
[data-ogsb] .es-button {
\tborder-width:0!important;
\tpadding:15px 30px 15px 30px!important;
}
[data-ogsb] .es-button.es-button-1 {
\tpadding:15px 25px!important;
}
@media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120%!important } h1 { font-size:30px!important; text-align:center } h2 { font-size:26px!important; text-align:left } h3 { font-size:20px!important; text-align:left } h1 a { text-align:center } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:30px!important } h2 a { text-align:left } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:20px!important } h3 a { text-align:left } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:17px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:17px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } a.es-button, button.es-button { font-size:14px!important; display:inline-block!important; border-width:15px 25px 15px 25px!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important } }
</style> 
 </head> 
 <body style="width:100%;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"> 
  <div class="es-wrapper-color" style="background-color:#F1F1F1"><!--[if gte mso 9]>
\t\t\t<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
\t\t\t\t<v:fill type="tile" color="#f1f1f1"></v:fill>
\t\t\t</v:background>
\t\t<![endif]--> 
   <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top"> 
     <tr style="border-collapse:collapse"> 
      <td valign="top" style="padding:0;Margin:0"> 
     
       <table cellpadding="0" cellspacing="0" class="es-header" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-header-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> 
             <tr style="border-collapse:collapse"> 
              <td style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:40px;padding-right:40px;background-color:#ffffff" bgcolor="#333333" align="left"> 
                <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                  <tr style="border-collapse:collapse"> 
                   <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                    <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                      <tr style="border-collapse:collapse"> 
                       <td align="center" style="padding:0;Margin:0;font-size:0; "><a  target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#ffffff;font-size:14px"><img src="${rentdigicareLogo}" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; height:76px;weight:150px" ></a></td> 
                      </tr> 
                    </table></td> 
                  </tr> 
                </table></td>
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#333333;width:600px" cellspacing="0" cellpadding="0" bgcolor="#333333" align="center"> 
             <tr style="border-collapse:collapse"> 
              <td style="Margin:0;padding-top:40px;padding-bottom:40px;padding-left:40px;padding-right:40px;background-image:url('https://jlbcxs.stripocdn.email/content/guids/CABINET_85e4431b39e3c4492fca561009cef9b5/images/93491522393929597.png');background-repeat:no-repeat" align="left" background="https://jlbcxs.stripocdn.email/content/guids/CABINET_85e4431b39e3c4492fca561009cef9b5/images/93491522393929597.png"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-bottom:10px;padding-top:40px"><h1 style="Margin:0;line-height:36px;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;font-size:30px;font-style:normal;font-weight:bold;color:#ffffff">Disable Two Factor Authentication</h1></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td esdev-links-color="#757575" align="center" style="Margin:0;padding-top:10px;padding-bottom:20px;padding-left:30px;padding-right:30px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#c5c5c5;font-size:15px"></p></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px"> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="padding:0;Margin:0;padding-top:40px;padding-left:40px;padding-right:40px"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     
                    <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-bottom:10px; "><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#000000;font-size:15px">OTP to disable Two Factor Authentication: <strong>${data.disableCode}</strong></p></td> 
                     </tr>
                   
                     <!-- <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">If that doesn't work, copy and paste the following link in your browser:<br></p></td> 
                     </tr>
\t\t\t\t\t<tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p href="${domain}/login" style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">${domain}/login<br></p></td> 
                     </tr>\t\t\t\t\t  -->
                     <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">Cheers,<br><strong>Team Rentdigicare</strong></p></td> 
                     </tr>
                     <!-- <tr style="border-collapse:collapse margin-top: 20px"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px"><strong>Rentdigicare</strong></p></td> 
                     </tr>  -->
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
             
           </table></td> 
         </tr> 
       </table> 
     
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#292828;width:600px" cellspacing="0" cellpadding="0" bgcolor="#292828" align="center"> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="Margin:0;padding-top:30px;padding-bottom:30px;padding-left:40px;padding-right:40px"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;font-size:0"> 
                       <table class="es-table-not-adapt es-social" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                         <tr style="border-collapse:collapse"> 
                          <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px">
                            <a href="https://www.facebook.com/gskproperties"><img title="Facebook" src="https://jlbcxs.stripocdn.email/content/assets/img/social-icons/circle-white/facebook-circle-white.png" alt="Fb" width="24" height="24" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td> 
                          <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px">
                           <a href="https://www.instagram.com/gskproperties/"><img title="Instagram" src="https://jlbcxs.stripocdn.email/content/assets/img/social-icons/circle-white/instagram-circle-white.png" alt="Inst" width="24" height="24" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td> 
                         </tr> 
                       </table></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       <table cellpadding="0" cellspacing="0" class="es-footer" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-footer-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="Margin:0;padding-top:40px;padding-bottom:40px;padding-left:40px;padding-right:40px"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:520px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                    
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:18px;color:#666666;font-size:12px"> <a target="_blank" class="unsubscribe" href="#" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#666666;font-size:12px">Unsubscribe</a></p></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:18px;color:#666666;font-size:12px">Copyright © 2022 - All Rights Reserved.</p></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       </td> 
     </tr> 
   </table> 
  </div>  
 </body>
</html>
    `;
  }

  if (emailFor === "SLOT_BOOKING_SUBMITTED") {
    return `<!DOCTYPE html>
<html>
<head>
    <title>Appointment request submit</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <style>
        body {
            margin: 0;
        }
    </style>
</head>
<body>
<div class="email-tempate" style="margin: 50px 0;">
    <div class="email-inner" style="width:100%; max-width:760px; margin:0 auto;border: 1px solid #f1f1f1; background-color: #F7F7F7;position:relative;">
        <div class="em-bg" style="background-color: #004397; height: 510px; position: absolute; left: 0; right: 0; top: 0; z-index: 0; border-bottom-left-radius: 35px; border-bottom-right-radius: 35px;">
            <table style="width:100%; max-width:100%; margin:0 auto; border-collapse: collapse;position:relative;z-index: 2;">
                <tr>
                    <td>
                        <table style="width:100%;border-collapse: collapse;">
                            <tr>
                                <td>
                                    <table style="width:100%;border-collapse: collapse;">
                                        <tr>
                                            <td colspan="2" style="padding: 5px 15px; text-align:center">
                                                <a href="${gskDomain}" target="_blank">
                                                    <img style="width: 100%; max-width: 150px;" src="${
                                                      data.logo ||
                                                      rentdigicareLogo
                                                    }"/>
                                                </a>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td>

                                </td>
                            </tr>
                        </table>
                        <table style="width:100%;border-collapse: collapse;background-color:#fff;max-width:600px; margin: 0 auto;border-radius: 10px;">
                            <tr>
                                <td colspan="2" style="padding: 50px 55px 0px; text-align:center;">
                                    <h2 style="color: #004397; font-family: 'Poppins', sans-serif; font-weight: 600; margin: 0 0 25px; font-size: 25px;">Dear, ${
                                      data.applicantName
                                    }</h2>
                                    <p style="font-family: 'Poppins', sans-serif; color: #231F1F; font-size: 15px; max-width: 640px; width: 100%; margin-left: auto; margin-right: auto; margin-bottom: 30px;">Thank you for submitting an appointment request. Once your appointment is received by property manager you will get an update. If you need a faster response please contact property manager directly.</p>
                                    ${
                                      data.managerName !== undefined
                                        ? `<p style="font-family: 'Poppins', sans-serif; color: #231F1F; font-size: 15px; max-width: 640px; width: 100%; margin-left: auto; margin-right: auto; margin-bottom: 10px;font-weight:600;"><b>Property manager : ${data.managerName}</b></p>`
                                        : ""
                                    }</br>
                                        <b>Property manager contact :</b> <a style="color:#004397;" href="mailto:${
                                          data.managerEmail
                                        }">${data.managerEmail}</a></br>
                                        <b>Property manager phone :</b> <a style="color:#004397;" href="tel:${
                                          data.managerPhone
                                        }">${data.managerPhone}</a></p>
                                    <p style="font-family: 'Poppins', sans-serif; color: #231F1F; font-size: 15px; max-width: 640px; width: 100%; margin-left: auto; margin-right: auto; margin-bottom: 30px;"><b>Property Name :</b> ${
                                      data.property
                                    } </br>${
      data.layout !== undefined ? `Property Layout : ${data.layout} ` : ""
    } <br>
                                    <a style="background-color: #231f1f; color: #fff; text-decoration: none; font-family: 'Poppins', sans-serif; font-size: 14px; padding: 13px 70px; border-radius: 50px;display: inline-block;  margin-top: 15px;  margin-bottom: 15px;" href="${
                                      data.companyDomain
                                    }">Website</a>
                                    <p style="font-family: 'Poppins', sans-serif; color: #231F1F; font-size: 15px; max-width: 640px; width: 100%; margin-left: auto; margin-right: auto; margin-bottom: 30px;"><b>Time requested :</b></br>
                                        <b>Date :</b> ${data.date}</br>
                                        <b>Start Time :</b> ${
                                          data.startTime
                                        } (MST)</br>
                                        <b>End Time :</b> ${
                                          data.endTime
                                        } (MST)</p> 
                                    <p style="font-family: 'Poppins', sans-serif; color: #231F1F; font-size: 15px; max-width: 640px; width: 100%; margin-left: auto; margin-right: auto; margin-bottom: 30px;">Best regards,</p> 
                                    <p style="font-family: 'Poppins', sans-serif; color: #231F1F; font-size: 15px; max-width: 640px; width: 100%; margin-left: auto; margin-right: auto; margin-bottom: 30px;">RentDigiCare</p>
                                </td>
                            </tr>

                        </table>
                        <table style="width:100%;border-collapse: collapse;background-color:transparent;max-width:600px; margin: 0 auto;border-bottom-left-radius: 10px;border-bottom-right-radius: 10px;">
                            <tr>
                                <td colspan="2" style="padding: 0px 0px; text-align:center;">
                                    <img style="width: 100%; display:block;" src="${greyshape}"/>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2" style="padding: 0px 0px; text-align:center;">
                                    <img style="width: 100%; display:block;max-width:130px;    margin: 10px auto 25px;" src="${
                                      data.logo || rentdigicareLogo
                                    }"/>
                                </td>
                            </tr>
                        </table>
                        <table style="width:100%; background-color:transparent;border-collapse: collapse;">
                            <tr>
                                <td colspan="2" style="padding: 40px 15px; text-align:center;">
                                    <p style="color: #231f1f; font-size: 15px; font-family: 'Poppins', sans-serif; margin: 15px 0;">©Copyrights 2024 - <a style="font-family: 'Poppins', sans-serif; text-decoration: none; color: #28abff; font-size: 15px;font-weight: 600;" href="${
                                      data.companyDomain
                                    }">${
      data.companyDomain
    }</a> - All rights reserved</p>
                                    <p style="color: #231f1f; font-size: 15px; font-family: 'Poppins', sans-serif; margin: 15px 0;">Don’t like these emails? <a style="font-family: 'Poppins', sans-serif; text-decoration: none; color: #28abff; font-size: 15px;font-weight: 600;" href="#">Unsubscribe</a> or <a style="font-family: 'Poppins', sans-serif; text-decoration: none; color: #28abff; font-size: 15px;font-weight: 600;" href="#">Manage Email Subscriptions</a></p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</div>
</body>
</html>
`;
  }
  if (emailFor === "SLOT_BOOKING_SUBMITTED_TO_MANAGER") {
    return `<!DOCTYPE html>
<html>
  <head>
    <title>New Application</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
      rel="stylesheet"
    />
    <style>
      body {
        margin: 0;
      }
    </style>
  </head>
  <body>
    <div class="email-tempate" style="margin: 50px 0">
      <div
        class="email-inner"
        style="
          width: 100%;
          max-width: 760px;
          margin: 0 auto;
          border: 1px solid #f1f1f1;
          background-color: #f7f7f7;
          position: relative;
        "
      >
        <div
          class="em-bg"
          style="
            background-color: #0d4880;
            height: 510px;
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            z-index: 0;
            border-bottom-left-radius: 35px;
            border-bottom-right-radius: 35px;
          "
        >
          <table
            style="
              width: 100%;
              max-width: 100%;
              margin: 0 auto;
              border-collapse: collapse;
              position: relative;
              z-index: 2;
            "
          >
            <tr>
              <td>
                <table style="width: 100%; border-collapse: collapse">
                  <tr>
                    <td>
                      <table style="width: 100%; border-collapse: collapse">
                        <tr>
                          <td
                            colspan="2"
                            style="padding: 5px 15px; text-align: center"
                          >
                            <img
                              style="width: 100%; max-width: 150px"
                              src="images/gsk-logo.png"
                            />
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                  </tr>
                </table>
                <table
                  style="
                    width: 100%;
                    border-collapse: collapse;
                    background-color: #fff;
                    max-width: 600px;
                    margin: 0 auto;
                    border-radius: 10px;
                  "
                >
                  <tr>
                    <td
                      colspan="2"
                      style="padding: 50px 55px 0px; text-align: center"
                    >
                      <h2
                        style="
                          color: #0d4880;
                          font-family: 'Poppins', sans-serif;
                          font-weight: 600;
                          margin: 0 0 25px;
                          font-size: 25px;
                        "
                        href="${data.companyDomain}"
                      >
                      Dear ${
                        data.managerName
                          ? data.managerName
                          : data.owner
                          ? data.owner
                          : "Manager"
                      }
</h2 >
                      <p
                        style="
                          font-family: 'Poppins', sans-serif;
                          color: #231f1f;
                          font-size: 15px;
                          max-width: 640px;
                          width: 100%;
                          margin-left: auto;
                          margin-right: auto;
                          margin-bottom: 30px;
                        "
                      >
                        You have received an application from
                        <strong>${data.applicantName}</strong> having email
                        <a href="mailto:${data.applicantEmail}"
                          >${data.applicantEmail}</a
                        >
                        and Phone <strong>${data.applicantPhone}</strong>, who
                        has shown an interest in ${data.property} ${
      data.layout !== undefined
        ? `Property Layout:
                        <strong>${data.layout}</strong>`
        : ""
    }
                        ${
                          data.applicantDescription !== undefined
                            ? `Comment:
                        <strong>${data.applicantDescription}</strong>`
                            : ""
                        }
                      </p>
                      <div
                        style="
                          margin-bottom: 20px;
                          font-family: 'Poppins', sans-serif;
                          color: #231f1f;
                          font-size: 15px;
                        "
                      >
                        <p style="margin-bottom: 5px">
                          <strong>Time requested is:</strong>
                        </p>
                        <ul style="padding-left: 20px; list-style: none">
                          <li style="margin-bottom: 5px">Date: ${data.date}</li>
                          <li style="margin-bottom: 5px">
                            Start Time: ${data.startTime}
                          </li>
                          <li>End Time: ${data.endTime}</li>
                        </ul>
                      </div>
                      <p
                        style="
                          font-family: 'Poppins', sans-serif;
                          color: #231f1f;
                          font-size: 15px;
                          max-width: 640px;
                          width: 100%;
                          margin-left: auto;
                          margin-right: auto;
                          margin-bottom: 30px;
                        "
                      >
                        Please feel free to contact the customer or click here
                        to approve or reject this appointment.
                      </p>
                      <a
                        style="
                          background-color: #231f1f;
                          color: #fff;
                          text-decoration: none;
                          font-family: 'Poppins', sans-serif;
                          font-size: 14px;
                          padding: 13px 70px;
                          border-radius: 50px;
                          display: inline-block;
                          margin-bottom: 15px;
                        "
                        href="${domain}/appointments"
                        >ACCESS ACCOUNT</a
                      >
                      <p
                        style="
                          font-family: 'Poppins', sans-serif;
                          color: #231f1f;
                          font-size: 15px;
                          max-width: 640px;
                          width: 100%;
                          margin-left: auto;
                          margin-right: auto;
                          margin-bottom: 30px;
                        "
                      >
                        If the above "ACCESS ACCOUNT" button does not work then
                        click on link below:
                        <a style="color: #0d4880" href="${domain}/Login"
                          >${domain}/Login</a
                        >
                      </p>
                      <p
                        style="
                          font-family: 'Poppins', sans-serif;
                          color: #231f1f;
                          font-size: 15px;
                          max-width: 640px;
                          width: 100%;
                          margin-left: auto;
                          margin-right: auto;
                          margin-bottom: 30px;
                        "
                      >
                        Cheers,
                      </p>
                      <p
                        style="
                          font-family: 'Poppins', sans-serif;
                          color: #231f1f;
                          font-size: 15px;
                          max-width: 640px;
                          width: 100%;
                          margin-left: auto;
                          margin-right: auto;
                          margin-bottom: 30px;
                        "
                      >
                        RentDigiCare
                      </p>
                    </td>
                  </tr>
                </table>
                <table
                  style="
                    width: 100%;
                    border-collapse: collapse;
                    background-color: transparent;
                    max-width: 600px;
                    margin: 0 auto;
                    border-bottom-left-radius: 10px;
                    border-bottom-right-radius: 10px;
                  "
                >
                  <tr>
                    <td
                      colspan="2"
                      style="padding: 0px 0px; text-align: center"
                    >
                      <img
                        style="width: 100%; display: block"
                        src="${greyshape}"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td
                      colspan="2"
                      style="padding: 0px 0px; text-align: center"
                    >
                      <img
                        style="
                          width: 100%;
                          display: block;
                          max-width: 130px;
                          margin: 10px auto 25px;
                        "
                        src="${data.logo || rentdigicareLogo}"
                      />
                    </td>
                  </tr>
                </table>
            
                <table
                  style="
                    width: 100%;
                    background-color: transparent;
                    border-collapse: collapse;
                  "
                >
                  <tr>
                    <td
                      colspan="2"
                      style="padding: 40px 15px; text-align: center"
                    >
                      <p
                        style="
                          color: #231f1f;
                          font-size: 15px;
                          font-family: 'Poppins', sans-serif;
                          margin: 15px 0;
                        "
                      >
                        ©Copyrights 2024 -
                        <a
                          style="
                            font-family: 'Poppins', sans-serif;
                            text-decoration: none;
                            color: #28abff;
                            font-size: 15px;
                            font-weight: 600;
                          "
                          href="${data.companyDomain}"
                          >${data.companyDomain}</a
                        >
                        - All rights reserved
                      </p>
                      <p
                        style="
                          color: #231f1f;
                          font-size: 15px;
                          font-family: 'Poppins', sans-serif;
                          margin: 15px 0;
                        "
                      >
                        Don’t like these emails?
                        <a
                          style="
                            font-family: 'Poppins', sans-serif;
                            text-decoration: none;
                            color: #28abff;
                            font-size: 15px;
                            font-weight: 600;
                          "
                          href="#"
                          >Unsubscribe</a
                        >
                        or
                        <a
                          style="
                            font-family: 'Poppins', sans-serif;
                            text-decoration: none;
                            color: #28abff;
                            font-size: 15px;
                            font-weight: 600;
                          "
                          href="#"
                          >Manage Email Subscriptions</a
                        >
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </body>
</html>
`;
  }
  if (emailFor === "SLOT_BOOKING_APPROVED") {
    return `
    <!DOCTYPE html>
    <html>
    <head>

    </head>
    <body style="
      width: 100%;
      font-family: helvetica, 'helvetica neue', arial, verdana, sans-serif;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
      padding: 0;
      margin: 0;
    ">
    <div class="es-wrapper-color" style="background-color: #f1f1f1">
      <!--[if gte mso 9]>
        \t\t\t<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          \t\t\t\t<v:fill type="tile" color="#f1f1f1"></v:fill>
          \t\t\t</v:background
        >
        \t\t<!
      [endif]-->
      <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
          border-collapse: collapse;
          border-spacing: 0px;
          padding: 0;
          margin: 0;
          width: 100%;
          height: 100%;
          background-repeat: repeat;
          background-position: center top;
        ">
        <tbody><tr style="border-collapse: collapse">
          <td valign="top" style="padding: 0; margin: 0">
            <table cellpadding="0" cellspacing="0" class="es-header" align="center" style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                table-layout: fixed !important;
                width: 100%;
                background-color: transparent;
                background-repeat: repeat;
                background-position: center top;
              ">
              <tbody><tr style="border-collapse: collapse">
                <td align="center" style="padding: 0; margin: 0">
                  <table class="es-header-body" style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: #ffffff;
                      width: 600px;
                    " cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
                    <tbody><tr style="border-collapse: collapse">
                      <td style="
                          margin: 0;
                          padding-top: 20px;
                          padding-bottom: 20px;
                          padding-left: 40px;
                          padding-right: 40px;
                          background-color: #ffffff;
                        " bgcolor="#333333" align="left">
                        <table width="100%" cellspacing="0" cellpadding="0" style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          ">
                          <tbody><tr style="border-collapse: collapse">
                            <td valign="top" align="center" style="padding: 0; margin: 0; width: 520px">
                              <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                ">
                                <tbody><tr style="border-collapse: collapse">
                                  <td align="center" style="padding: 0; margin: 0; font-size: 0">
                                    <a href="${gskDomain}" target="_blank" style="
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        mso-line-height-rule: exactly;
                                        text-decoration: underline;
                                        color: #ffffff;
                                        font-size: 14px;
                                      "><img src="${
                                        data.logo || rentdigicareLogo
                                      }" alt="" style="
                                          display: block;
                                          border: 0;
                                          outline: none;
                                          text-decoration: none;
                                          -ms-interpolation-mode: bicubic;
                                          height: 76px;
                                          weight: 150px;
                                        "></a>
                                  </td>
                                </tr>
                              </tbody></table>
                            </td>
                          </tr>
                        </tbody></table>
                      </td>
                    </tr>
                  </tbody></table>
                </td>
              </tr>
            </tbody></table>
            <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                table-layout: fixed !important;
                width: 100%;
              ">
              <tbody><tr style="border-collapse: collapse">
                <td align="center" style="padding: 0; margin: 0">
                  <table class="es-content-body" style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: #333333;
                      width: 600px;
                    " cellspacing="0" cellpadding="0" bgcolor="#333333" align="center">
                    <tbody><tr style="border-collapse: collapse">
                      <td style="
                          margin: 0;
                          padding-top: 40px;
                          padding-bottom: 40px;
                          padding-left: 40px;
                          padding-right: 40px;
                          background-image: url('https://jlbcxs.stripocdn.email/content/guids/CABINET_85e4431b39e3c4492fca561009cef9b5/images/93491522393929597.png');
                          background-repeat: no-repeat;
                        " align="left" background="https://jlbcxs.stripocdn.email/content/guids/CABINET_85e4431b39e3c4492fca561009cef9b5/images/93491522393929597.png">
                        <table width="100%" cellspacing="0" cellpadding="0" style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          ">
                          <tbody><tr style="border-collapse: collapse">
                            <td valign="top" align="center" style="padding: 0; margin: 0; width: 520px">
                              <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                ">
                                <tbody><tr style="border-collapse: collapse">
                                  <td align="center" style="
                                      padding: 0;
                                      margin: 0;
                                      padding-bottom: 10px;
                                      padding-top: 40px;
                                    ">
                                    <h1 style="
                                        margin: 0;
                                        line-height: 36px;
                                        mso-line-height-rule: exactly;
                                        font-family: lato, 'helvetica neue',
                                          helvetica, arial, sans-serif;
                                        font-size: 30px;
                                        font-style: normal;
                                        font-weight: bold;
                                        color: #ffffff;
                                      ">
                                      Your Appointment is Approved !
</h1>
                                  </td>
                                </tr>
                                <tr style="border-collapse: collapse">
                                  <td align="center" style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 10px;
                                      padding-bottom: 20px;
                                    ">
                                    <span class="es-button-border" style="
                                        border-style: solid;
                                        border-color: #26a4d3;
                                        background: none 0% 0% repeat scroll
                                          #26a4d3;
                                        border-width: 0px;
                                        display: inline-block;
                                        border-radius: 50px;
                                        width: auto;
                                      "><a href="${
                                        data.companyDomain
                                      }" class="es-button" target="_blank" style="
                                          mso-style-priority: 100 !important;
                                          text-decoration: none;
                                          transition: all 100ms ease-in;
                                          -webkit-text-size-adjust: none;
                                          -ms-text-size-adjust: none;
                                          mso-line-height-rule: exactly;
                                          color: #ffffff;
                                          font-size: 14px;
                                          border-style: solid;
                                          border-color: #26a4d3;
                                          border-width: 15px 30px 15px 30px;
                                          display: inline-block;
                                          background: #26a4d3;
                                          border-radius: 50px;
                                          font-family: arial, 'helvetica neue',
                                            helvetica, sans-serif;
                                          font-weight: bold;
                                          font-style: normal;
                                          line-height: 17px;
                                          width: auto;
                                          text-align: center;
                                        ">WEBSITE</a></span>
                                  </td>
                                </tr>
                                <!-- <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:20px"><span class="es-button-border" style="border-style:solid;border-color:#26a4d3;background:none 0% 0% repeat scroll #26a4d3;border-width:0px;display:inline-block;border-radius:50px;width:auto"><a href="${domain}/login" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;transition:all 100ms ease-in;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:14px;border-style:solid;border-color:#26a4d3;border-width:15px 30px 15px 30px;display:inline-block;background:#26a4d3;border-radius:50px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:bold;font-style:normal;line-height:17px;width:auto;text-align:center">ACCESS ACCOUNT</a></span></td> 
                     </tr>  -->
                              </tbody></table>
                            </td>
                          </tr>
                        </tbody></table>
                      </td>
                    </tr>
                  </tbody></table>
                </td>
              </tr>
            </tbody></table>
            <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                table-layout: fixed !important;
                width: 100%;
              ">
              <tbody><tr style="border-collapse: collapse">
                <td align="center" style="padding: 0; margin: 0">
                  <table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: #ffffff;
                      width: 600px;
                    ">
                    <tbody><tr style="border-collapse: collapse">
                      <td align="left" style="
                          padding: 0;
                          margin: 0;
                          padding-top: 40px;
                          padding-left: 40px;
                          padding-right: 40px;
                        ">
                        <table width="100%" cellspacing="0" cellpadding="0" style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          ">
                          <tbody><tr style="border-collapse: collapse">
                            <td valign="top" align="center" style="padding: 0; margin: 0; width: 520px">
                              <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                ">
                                <tbody><tr style="border-collapse: collapse">
                                  <td align="left" style="
                                      padding: 0;
                                      margin: 0;
                                      padding-bottom: 10px;
                                    ">
                                    <p style="
                                        margin: 0;
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        mso-line-height-rule: exactly;
                                        font-family: helvetica, 'helvetica neue',
                                          arial, verdana, sans-serif;
                                        line-height: 23px;
                                        color: #555555;
                                        font-size: 15px;
                                      ">
                                      Dear, ${data.applicantName}
                                    </p>
                                  </td>
                                </tr>
                                <tr style="border-collapse: collapse">
                                  <td align="left" style="
                                      padding: 0;
                                      margin: 0;
                                      padding-bottom: 10px;
                                    ">
                                    <p style="
                                        margin: 0;
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        mso-line-height-rule: exactly;
                                        font-family: helvetica, 'helvetica neue',
                                          arial, verdana, sans-serif;
                                        line-height: 23px;
                                        color: #555555;
                                        font-size: 15px;
                                      ">
                                      We are pleased to inform you that your appointment request has been approved. Your appointment is confirmed for the following date and time:
                                      <br>
                                      <br>
                                      Date : ${data.date}
                                      <br>
                                      Start Time : ${data.startTime} <br>
                                      End Time : ${data.endTime} <br>
                                      <br>

                                      Property Name : ${data.property} <br>
                                      Property Layout : ${
                                        data.layout === undefined
                                          ? "NA"
                                          : data.layout
                                      } <br>
                                      <br>
                                
                                      <p style="
                                        margin: 0;
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        mso-line-height-rule: exactly;
                                        font-family: helvetica, 'helvetica neue',
                                          arial, verdana, sans-serif;
                                        line-height: 23px;
                                        color: #555555;
                                        font-size: 15px;
                                      ">Please make sure to arrive on time for your appointment. If you need to reschedule or cancel your appointment, please contact us as soon as possible.
                                      <br>
                                      <br>
                                      Thank you for choosing our company for your needs. We look forward to meeting with you.
                                      <br></p></p>
                                  </td>
                                </tr>
                                <tr style="border-collapse: collapse">
                                  <td align="left" style="
                                      padding: 0;
                                      margin: 0;
                                      padding-bottom: 10px;
                                    ">
                                    
                                  </td>
                                </tr>
                                <tr style="border-collapse: collapse">
                                  <td align="left" style="
                                      padding: 0;
                                      margin: 0;
                                      padding-bottom: 10px;
                                    ">
                                    <p style="
                                        margin: 0;
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        mso-line-height-rule: exactly;
                                        font-family: helvetica, 'helvetica neue',
                                          arial, verdana, sans-serif;
                                        line-height: 23px;
                                        text-align: justify;
                                        color: #555555;
                                        font-size: 15px;
                                      ">
<br></p>
                                  </td>
                                </tr>

                                <!-- <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">If that doesn't work, copy and paste the following link in your browser:<br></p></td> 
                     </tr>
\t\t\t\t\t<tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p href="${domain}/login" style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px">${domain}/login<br></p></td> 
                     </tr>\t\t\t\t\t  -->
                                <tr style="border-collapse: collapse">
                                  <td align="left" style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 10px;
                                      padding-bottom: 10px;
                                    ">
                                    <p style="
                                        margin: 0;
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        mso-line-height-rule: exactly;
                                        font-family: helvetica, 'helvetica neue',
                                          arial, verdana, sans-serif;
                                        line-height: 23px;
                                        color: #555555;
                                        font-size: 15px;
                                      ">
                                      Cheers,<br><strong>Team ${
                                        data.companyName
                                      }</strong>
                                    </p>
                                  </td>
                                </tr>
                                <!-- <tr style="border-collapse:collapse margin-top: 20px"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#555555;font-size:15px"><strong>Rentdigicare</strong></p></td> 
                     </tr>  -->
                              </tbody></table>
                            </td>
                          </tr>
                        </tbody></table>
                      </td>
                    </tr>
                  </tbody></table>
                </td>
              </tr>
            </tbody></table>

            <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                table-layout: fixed !important;
                width: 100%;
              ">
              <tbody><tr style="border-collapse: collapse">
                <td align="center" style="padding: 0; margin: 0">
                  <table class="es-content-body" style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: #292828;
                      width: 600px;
                    " cellspacing="0" cellpadding="0" bgcolor="#292828" align="center">
                    <tbody><tr style="border-collapse: collapse">
                      <td align="left" style="
                          margin: 0;
                          padding-top: 30px;
                          padding-bottom: 30px;
                          padding-left: 40px;
                          padding-right: 40px;
                        ">
                        <table width="100%" cellspacing="0" cellpadding="0" style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          ">
                          <tbody><tr style="border-collapse: collapse">
                            <td valign="top" align="center" style="padding: 0; margin: 0; width: 520px">
                              <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                ">
                                <tbody><tr style="border-collapse: collapse">
                                  <td align="center" style="padding: 0; margin: 0; font-size: 0">
                                    <table class="es-table-not-adapt es-social" cellspacing="0" cellpadding="0" role="presentation" style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      ">
                                        <tbody><tr style="border-collapse:collapse"> 
                                        <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px">
                                          <a href="https://www.facebook.com/gskproperties"><img title="Facebook" src="https://jlbcxs.stripocdn.email/content/assets/img/social-icons/circle-white/facebook-circle-white.png" alt="Fb" width="24" height="24" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td> 
                                        <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px">
                                          <a href="https://www.instagram.com/gskproperties/"><img title="Instagram" src="https://jlbcxs.stripocdn.email/content/assets/img/social-icons/circle-white/instagram-circle-white.png" alt="Inst" width="24" height="24" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td> 
                                      </tr>
                                    </tbody></table>
                                  </td>
                                </tr>
                              </tbody></table>
                            </td>
                          </tr>
                        </tbody></table>
                      </td>
                    </tr>
                  </tbody></table>
                </td>
              </tr>
            </tbody></table>
            <table cellpadding="0" cellspacing="0" class="es-footer" align="center" style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                table-layout: fixed !important;
                width: 100%;
                background-color: transparent;
                background-repeat: repeat;
                background-position: center top;
              ">
              <tbody><tr style="border-collapse: collapse">
                <td align="center" style="padding: 0; margin: 0">
                  <table class="es-footer-body" style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: #ffffff;
                      width: 600px;
                    " cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
                    <tbody><tr style="border-collapse: collapse">
                      <td align="left" style="
                          margin: 0;
                          padding-top: 40px;
                          padding-bottom: 40px;
                          padding-left: 40px;
                          padding-right: 40px;
                        ">
                        <table width="100%" cellspacing="0" cellpadding="0" style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          ">
                          <tbody><tr style="border-collapse: collapse">
                            <td valign="top" align="center" style="padding: 0; margin: 0; width: 520px">
                              <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                ">
                                <tbody><tr style="border-collapse: collapse">
                                  <td align="center" style="
                                      padding: 0;
                                      margin: 0;
                                      padding-bottom: 10px;
                                    ">
                                    <p style="
                                        margin: 0;
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        mso-line-height-rule: exactly;
                                        font-family: helvetica, 'helvetica neue',
                                          arial, verdana, sans-serif;
                                        line-height: 18px;
                                        color: #666666;
                                        font-size: 12px;
                                      ">
                                      <a target="_blank" class="unsubscribe" href="#" style="
                                          -webkit-text-size-adjust: none;
                                          -ms-text-size-adjust: none;
                                          mso-line-height-rule: exactly;
                                          text-decoration: underline;
                                          color: #666666;
                                          font-size: 12px;
                                        ">Unsubscribe</a>
                                    </p>
                                  </td>
                                </tr>
                                <tr style="border-collapse: collapse">
                                  <td align="center" style="padding: 0; margin: 0">
                                    <p style="
                                        margin: 0;
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        mso-line-height-rule: exactly;
                                        font-family: helvetica, 'helvetica neue',
                                          arial, verdana, sans-serif;
                                        line-height: 18px;
                                        color: #666666;
                                        font-size: 12px;
                                      ">
                                      Copyright © 2022 - All Rights Reserved.
                                    </p>
                                  </td>
                                </tr>
                              </tbody></table>
                            </td>
                          </tr>
                        </tbody></table>
                      </td>
                    </tr>
                  </tbody></table>
                </td>
              </tr>
            </tbody></table>
          </td>
        </tr>
      </tbody></table>
    </div>
  
</body>
      </html>
    `;
  }
  if (emailFor === "SLOT_BOOKING_APPROVED_TO_USER") {
    return `
    <!DOCTYPE html>
<html>
<head>
<title>Slot Booking Approved To User</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
<style>
body {
    margin: 0;
}
</style>
</head>
<body>
<div class="email-tempate" style="margin: 50px 0;">
	<div class="email-inner" style="width:100%; max-width:760px; margin:0 auto;border: 1px solid #f1f1f1; background-color: #F7F7F7;position:relative;">
		<div class="em-bg" style="background-color: #65B741; height: 510px; position: absolute; left: 0; right: 0; top: 0; z-index: 0; border-bottom-left-radius: 35px; border-bottom-right-radius: 35px;">
			<table style="width:100%; max-width:100%; margin:0 auto; border-collapse: collapse;position:relative;z-index: 2;">
				<tr>
					<td>
						<table style="width:100%;border-collapse: collapse;">
							<tr>
								<td>
									<table style="width:100%;border-collapse: collapse;">
										<tr>
											<td colspan="2" style="padding: 5px 15px; text-align:center">
												<img style="width: 100%; max-width: 150px;" src="${
                          data.logo || rentdigicareLogo
                        }"/>
												</a>  
											</td>
										</tr>
									</table>
								</td>
							</tr>
							<tr>
								<td>
									
								</td>
							</tr>
						</table>
						<table style="width:100%;border-collapse: collapse;background-color:#fff;max-width:600px; margin: 0 auto;border-radius: 10px;">
                            
							<tr>
								<td colspan="2" style="padding: 50px 55px 0px; text-align:center;">
                <!-- <a href="${gskDomain}" target="_blank">
												<img style="width: 100%; max-width: 150px;" src="${
                          data.logo || rentdigicareLogo
                        }"/>
												</a>         -->
                                                <h1 style="color: #4CB9E7; font-family: 'Poppins', sans-serif; font-weight: 700; margin: 0 0 25px; font-size: 35px;">Your Appointment is Approved !</h1>
                                                
                                                    <span class="es-button-border" style="border-style:solid;border-color:#26a4d3;background:none 0% 0% repeat scroll #26a4d3;border-width:0px;display:inline-block;border-radius:50px;width:auto;margin-top: 5px;"><a href="${
                                                      data.companyDomain
                                                    }" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;transition:all 100ms ease-in;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:14px;border-style:solid;border-color:#4CB9E7;border-width:15px 30px 15px 30px;display:inline-block;background:#4CB9E7;border-radius:50px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:bold;font-style:normal;line-height:17px;width:auto;text-align:center">WEBSITE</a></span>           

									<p style="color: #4CB9E7; font-family: 'Poppins', sans-serif; font-weight: 600; margin: 10px 0 25px; font-size: 18px;">Dear, ${
                    data.applicantName
                  }</p>
                                      <p style="color: #000000; font-family: 'Poppins', sans-serif; font-weight: 600; margin: 10px 0 0; font-size: 15px;">
                                        We are pleased to inform you that your appointment request has been approved. Your appointment is confirmed for the following date and time:
                                      </p>
                                      
									
                                      <p style="font-family: 'Poppins', sans-serif; color: #000000; font-size: 15px; max-width: 640px; width: 100%; margin-left: auto; margin-right: auto; margin-bottom: 30px;">
                                        <strong style="color: #4CB9E7;">Date :</strong> ${
                                          data.date
                                        }</br>
                                        <strong style="color: #4CB9E7;">Start Time:</strong> ${
                                          data.startTime
                                        } </br>
                                        <strong style="color: #4CB9E7;">End Time:</strong> ${
                                          data.endTime
                                        } </br><br>
                                        
                                        <strong style="color: #4CB9E7;">Property Name </strong> ${
                                          data.property
                                        } </br>
                                        <strong style="color: #4CB9E7;">Property Layout </strong> ${
                                          data.layout === undefined
                                            ? "NA"
                                            : data.layout
                                        } </br>
                                          <strong style="color: #4CB9E7;">Phone </strong> ${
                                            data.property
                                          } </br>
                                          <strong style="color: #4CB9E7;">Email</strong> ${
                                            data.property
                                          } </br>
                                        <br>
                                        Please make sure to arrive on time for your appointment. If you need to reschedule or cancel your appointment, please contact us as soon as possible.<br>
                                        Thank you for choosing our company for your needs. We look forward to meeting with you.
                                        <br>
                                        
                                        
                                      </p>
                                      <span class="es-button-border" style="border-style:solid;border-color:#26a4d3;background:none 0% 0% repeat scroll #26a4d3;border-width:0px;display:inline-block;border-radius:50px;width:auto;margin-top: 5px;"><a href="${domain}/cancel-appointment/${
      data.id
    }" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;transition:all 100ms ease-in;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:14px;border-style:solid;border-color:#4CB9E7;border-width:15px 30px 15px 30px;display:inline-block;background:#4CB9E7;border-radius:50px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:bold;font-style:normal;line-height:17px;width:auto;text-align:center">Cancel Appointment</a></span>      
<br>
                                      <span class="es-button-border" style="border-style:solid;border-color:#26a4d3;background:none 0% 0% repeat scroll #26a4d3;border-width:0px;display:inline-block;border-radius:50px;width:auto;margin-top: 5px;"><a href="${domain}/reschedule-appoinment/${
      data.id
    }/${
      data.calendarId
    }" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;transition:all 100ms ease-in;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:14px;border-style:solid;border-color:#65B741;border-width:15px 30px 15px 30px;display:inline-block;background:#65B741;border-radius:50px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:bold;font-style:normal;line-height:17px;width:auto;text-align:center">Reschedule Appointment</a></span>      
                                      

									<p style="font-family: 'Poppins', sans-serif; color: #000000; font-size: 15px; max-width: 640px; width: 100%; margin-left: auto; margin-right: auto;">Cheers,</p> 
									<p style="font-family: 'Poppins', sans-serif; color: #000000; font-size: 15px; max-width: 640px; width: 100%; margin-left: auto; margin-right: auto; margin-bottom: 30px;">Team ${
                    data?.companyName || ""
                  }</p>
								</td>
							</tr>
							
						</table>
						  <table style="width:100%;border-collapse: collapse;background-color:transparent;max-width:600px; margin: 0 auto;border-bottom-left-radius: 10px;border-bottom-right-radius: 10px;">
                            <tr>
                                <td colspan="2" style="padding: 0px 0px; text-align:center;">
                                    <img style="width: 100%; display:block;" src="${greyshape}"/>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2" style="padding: 0px 0px; text-align:center;">
                                    <img style="width: 100%; display:block;max-width:130px;    margin: 10px auto 25px;" src="${
                                      data.logo || rentdigicareLogo
                                    }"/>
                                </td>
                            </tr>
                        </table>
					 <table style="width:100%; background-color:transparent;border-collapse: collapse;">
                            <tr>
                                <td colspan="2" style="padding: 40px 15px; text-align:center;">
                                    <p style="color: #414242; font-size: 15px; font-family: 'Poppins', sans-serif; margin: 15px 0;">©Copyrights 2024 - <a style="font-family: 'Poppins', sans-serif; text-decoration: none; color: #1a1816; font-size: 15px;font-weight: 600;" href="${
                                      data.companyDomain
                                    }">${
      data.companyDomain
    }</a> - All rights reserved</p>
                                    <p style="color: #414242; font-size: 15px; font-family: 'Poppins', sans-serif; margin: 15px 0;">Don’t like these emails? <a style="font-family: 'Poppins', sans-serif; text-decoration: none; color: #1a1816; font-size: 15px;font-weight: 600;" href="#">Unsubscribe</a> or <a style="font-family: 'Poppins', sans-serif; text-decoration: none; color: #553710; font-size: 15px;font-weight: 600;" href="#">Manage Email Subscriptions</a></p>
                                </td>
                            </tr>
                        </table>
                    </td> 
                </tr>
            </table>
        </div>
    </div></div>
</div>
</body>
</html>
   `;
  }
  if (emailFor === "SLOT_BOOKING_CANCELED") {
    return `
    <!DOCTYPE html>
    <html>
    <head>
    <title>Slot Booking Cancel</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <style>
    body {
        margin: 0;
    }
    </style>
    </head>
    <body>
    <div class="email-tempate" style="margin: 50px 0;">
      <div class="email-inner" style="width:100%; max-width:760px; margin:0 auto;border: 1px solid #f1f1f1; background-color: #F7F7F7;position:relative;">
        <div class="em-bg" style="background-color: #D74B76; height: 510px; position: absolute; left: 0; right: 0; top: 0; z-index: 0; border-bottom-left-radius: 35px; border-bottom-right-radius: 35px;">
          <table style="width:100%; max-width:100%; margin:0 auto; border-collapse: collapse;position:relative;z-index: 2;">
            <tr>
              <td>
                <table style="width:100%;border-collapse: collapse;">
                  <tr>
                    <td>
                      <table style="width:100%;border-collapse: collapse;">
                        <tr>
                          <td colspan="2" style="padding: 5px 15px; text-align:center">
                            <img style="width: 100%; max-width: 150px;" src="${
                              data.logo||rentdigicareLogo
                            }"/>
                            </a>  
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      
                    </td>
                  </tr>
                </table>
                <table style="width:100%;border-collapse: collapse;background-color:#fff;max-width:600px; margin: 0 auto;border-radius: 10px;">
                                
                  <tr>
                    <td colspan="2" style="padding: 50px 55px 0px; text-align:center;">
                    <!-- <a href="${gskDomain}" target="_blank">
                            <img style="width: 100%; max-width: 150px;" src="${
                              data.logo||rentdigicareLogo
                            }"/>
                            </a>         -->
                                                    <h1 style="color: #673F69; font-family: 'Poppins', sans-serif; font-weight: 700; margin: 0 0 25px; font-size: 35px;">Your Appointment is Canceled !</h1>
                                                    
                                                        <span class="es-button-border" style="border-style:solid;border-color:#26a4d3;background:none 0% 0% repeat scroll #26a4d3;border-width:0px;display:inline-block;border-radius:50px;width:auto;margin-top: 5px;"><a href="${
                                                          data.companyDomain
                                                        }" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;transition:all 100ms ease-in;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:14px;border-style:solid;border-color:#673F69;border-width:15px 30px 15px 30px;display:inline-block;background:#673F69;border-radius:50px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:bold;font-style:normal;line-height:17px;width:auto;text-align:center">WEBSITE</a></span>           
    
                      <p style="color: #673F69; font-family: 'Poppins', sans-serif; font-weight: 600; margin: 10px 0 25px; font-size: 18px;">Dear, ${
                        data.applicantName
                      }</p>
                                          <p style="color: #000000; font-family: 'Poppins', sans-serif; font-weight: 600; margin: 10px 0 0; font-size: 15px;">
                                            We are pleased to inform you that your appointment request has been canceled for the following date and time:
                                          </p>
                                          
                      
                                          <p style="font-family: 'Poppins', sans-serif; color: #000000; font-size: 15px; max-width: 640px; width: 100%; margin-left: auto; margin-right: auto; margin-bottom: 30px;">
                                            <strong style="color: #673F69;">Date :</strong> ${
                                              data.date
                                            }</br>
                                            <strong style="color: #673F69;">Start Time:</strong> ${
                                              data.startTime
                                            } </br>
                                            <strong style="color: #673F69;">End Time:</strong> ${
                                              data.endTime
                                            } </br><br>
                                            ${
                                              data?.reason
                                                ? "Reason: " + data.reason
                                                : ""
                                            } </br>
                                            <strong style="color: #673F69;">Property Name </strong> ${
                                              data.property
                                            } </br>
                                            <strong style="color: #673F69;">Property Layout </strong> ${
                                              data.layout === undefined
                                                ? "NA"
                                                : data.layout
                                            } </br>
                                            <br><br>
                                            Thank you for choosing our company for your needs.
                                            <br>
                                            
                                            
                                          </p>
                                          
    
                      <p style="font-family: 'Poppins', sans-serif; color: #000000; font-size: 15px; max-width: 640px; width: 100%; margin-left: auto; margin-right: auto;">Cheers,</p> 
                      <p style="font-family: 'Poppins', sans-serif; color: #000000; font-size: 15px; max-width: 640px; width: 100%; margin-left: auto; margin-right: auto; margin-bottom: 30px;">Team ${
                        data?.companyName || ""
                      }</p>
                    </td>
                  </tr>
                  
                </table>
                  <table style="width:100%;border-collapse: collapse;background-color:transparent;max-width:600px; margin: 0 auto;border-bottom-left-radius: 10px;border-bottom-right-radius: 10px;">
                                <tr>
                                    <td colspan="2" style="padding: 0px 0px; text-align:center;">
                                        <img style="width: 100%; display:block;" src="${greyshape}"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2" style="padding: 0px 0px; text-align:center;">
                                        <img style="width: 100%; display:block;max-width:130px;    margin: 10px auto 25px;" src="${
                                          data.logo||rentdigicareLogo
                                        }"/>
                                    </td>
                                </tr>
                            </table>
               <table style="width:100%; background-color:transparent;border-collapse: collapse;">
                                <tr>
                                    <td colspan="2" style="padding: 40px 15px; text-align:center;">
                                        <p style="color: #414242; font-size: 15px; font-family: 'Poppins', sans-serif; margin: 15px 0;">©Copyrights 2024 - <a style="font-family: 'Poppins', sans-serif; text-decoration: none; color: #1a1816; font-size: 15px;font-weight: 600;" href="${
                                          data.companyDomain
                                        }">${
      data.companyDomain
    }</a> - All rights reserved</p>
                                        <p style="color: #414242; font-size: 15px; font-family: 'Poppins', sans-serif; margin: 15px 0;">Don’t like these emails? <a style="font-family: 'Poppins', sans-serif; text-decoration: none; color: #1a1816; font-size: 15px;font-weight: 600;" href="#">Unsubscribe</a> or <a style="font-family: 'Poppins', sans-serif; text-decoration: none; color: #553710; font-size: 15px;font-weight: 600;" href="#">Manage Email Subscriptions</a></p>
                                    </td>
                                </tr>
                            </table>
                        </td> 
                    </tr>
                </table>
            </div>
        </div></div>
    </div>
    </body>
    </html>
    `;
  }
  if (emailFor === "SLOT_BOOKING_REJECTED") {
    return `
    <!DOCTYPE html>
<html>
<head>
<title>Slot Booking Rejected</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
<style>
body {
    margin: 0;
}
</style>
</head>
<body>
<div class="email-tempate" style="margin: 50px 0;">
	<div class="email-inner" style="width:100%; max-width:760px; margin:0 auto;border: 1px solid #f1f1f1; background-color: #F7F7F7;position:relative;">
		<div class="em-bg" style="background-color: #C7B7A3; height: 510px; position: absolute; left: 0; right: 0; top: 0; z-index: 0; border-bottom-left-radius: 35px; border-bottom-right-radius: 35px;">
			<table style="width:100%; max-width:100%; margin:0 auto; border-collapse: collapse;position:relative;z-index: 2;">
				<tr>
					<td>
						<table style="width:100%;border-collapse: collapse;">
							<tr>
								<td>
									<table style="width:100%;border-collapse: collapse;">
										<tr>
											<td colspan="2" style="padding: 5px 15px; text-align:center">
												<img style="width: 100%; max-width: 150px;" src="${data.logo||rentdigicareLogo}"/>
												</a>  
											</td>
										</tr>
									</table>
								</td>
							</tr>
							<tr>
								<td>
									
								</td>
							</tr>
						</table>
						<table style="width:100%;border-collapse: collapse;background-color:#fff;max-width:600px; margin: 0 auto;border-radius: 10px;">
                            
							<tr>
								<td colspan="2" style="padding: 50px 55px 0px; text-align:center;">
                <!-- <a href="${gskDomain}" target="_blank">
												<img style="width: 100%; max-width: 150px;" src="${data.logo||rentdigicareLogo}"/>
												</a>         -->
                                                <h1 style="color: #6D2932; font-family: 'Poppins', sans-serif; font-weight: 700; margin: 0 0 25px; font-size: 35px;">Your Appointment  Canceled !</h1>
                                                
                                                    <span class="es-button-border" style="border-style:solid;border-color:#26a4d3;background:none 0% 0% repeat scroll #26a4d3;border-width:0px;display:inline-block;border-radius:50px;width:auto;margin-top: 5px;"><a href="${
                                                      data.companyDomain
                                                    }" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;transition:all 100ms ease-in;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:14px;border-style:solid;border-color:#6D2932;border-width:15px 30px 15px 30px;display:inline-block;background:#6D2932;border-radius:50px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:bold;font-style:normal;line-height:17px;width:auto;text-align:center">WEBSITE</a></span>           

									<p style="color: #6D2932; font-family: 'Poppins', sans-serif; font-weight: 600; margin: 10px 0 25px; font-size: 18px;">Dear, ${
                    data.applicantName
                  }</p>
                                      <p style="color: #000000; font-family: 'Poppins', sans-serif; font-weight: 600; margin: 10px 0 0; font-size: 15px;">
                                        We are pleased to inform you that your appointment request has been canceled for the following date and time:
                                      </p>
                                      
									
                                      <p style="font-family: 'Poppins', sans-serif; color: #000000; font-size: 15px; max-width: 640px; width: 100%; margin-left: auto; margin-right: auto; margin-bottom: 30px;">
                                        <strong style="color: #6D2932;">Date :</strong> ${
                                          data.date
                                        }</br>
                                        <strong style="color: #6D2932;">Start Time:</strong> ${
                                          data.startTime
                                        } </br>
                                        <strong style="color: #6D2932;">End Time:</strong> ${
                                          data.endTime
                                        } </br>
                                        <strong style="color: #6D2932;">Reason:</strong>  ${
                                          data?.reason
                                            ? "Reason: " + data.reason
                                            : ""
                                        }  </br><br>
                                        <strong style="color: #6D2932;">Property Name </strong> ${
                                          data.property
                                        } </br>
                                        <strong style="color: #6D2932;">Property Layout </strong> ${
                                          data.layout === undefined
                                            ? "NA"
                                            : data.layout
                                        } </br>
                                        <strong style="color: #6D2932;">Reason:</strong> ${
                                          data.reason === undefined
                                            ? "NA"
                                            : data.reason
                                        } </br>
                                        <br><br>
                                        Thank you for choosing our company for your needs.
                                        <br>
                                        
                                        
                                      </p>
                                      

									<p style="font-family: 'Poppins', sans-serif; color: #000000; font-size: 15px; max-width: 640px; width: 100%; margin-left: auto; margin-right: auto;">Cheers,</p> 
									<p style="font-family: 'Poppins', sans-serif; color: #000000; font-size: 15px; max-width: 640px; width: 100%; margin-left: auto; margin-right: auto; margin-bottom: 30px;">Team ${
                    data?.companyName || ""
                  }</p>
								</td>
							</tr>
							
						</table>
						  <table style="width:100%;border-collapse: collapse;background-color:transparent;max-width:600px; margin: 0 auto;border-bottom-left-radius: 10px;border-bottom-right-radius: 10px;">
                            <tr>
                                <td colspan="2" style="padding: 0px 0px; text-align:center;">
                                    <img style="width: 100%; display:block;" src="${greyshape}"/>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2" style="padding: 0px 0px; text-align:center;">
                                    <img style="width: 100%; display:block;max-width:130px;    margin: 10px auto 25px;" src="${
                                      data.logo||rentdigicareLogo
                                    }"/>
                                </td>
                            </tr>
                        </table>
					 <table style="width:100%; background-color:transparent;border-collapse: collapse;">
                            <tr>
                                <td colspan="2" style="padding: 40px 15px; text-align:center;">
                                    <p style="color: #414242; font-size: 15px; font-family: 'Poppins', sans-serif; margin: 15px 0;">©Copyrights 2024 - <a style="font-family: 'Poppins', sans-serif; text-decoration: none; color: #1a1816; font-size: 15px;font-weight: 600;" href="${
                                      data.companyDomain
                                    }">${
      data.companyDomain
    }</a> - All rights reserved</p>
                                    <p style="color: #414242; font-size: 15px; font-family: 'Poppins', sans-serif; margin: 15px 0;">Don’t like these emails? <a style="font-family: 'Poppins', sans-serif; text-decoration: none; color: #1a1816; font-size: 15px;font-weight: 600;" href="#">Unsubscribe</a> or <a style="font-family: 'Poppins', sans-serif; text-decoration: none; color: #553710; font-size: 15px;font-weight: 600;" href="#">Manage Email Subscriptions</a></p>
                                </td>
                            </tr>
                        </table>
                    </td> 
                </tr>
            </table>
        </div>
    </div></div>
</div>
</body>
</html>

    `;
  }
  if (emailFor === "REMINDER_APPOINTMENT_30_MINUTES") {
    return `<!DOCTYPE html>
<html>
<head>
<title>Appointment Reminder Manager</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
<style>
body {
    margin: 0;
}
</style>
</head>
<body>
<div class="email-tempate" style="margin: 50px 0;">
	<div class="email-inner" style="width:100%; max-width:760px; margin:0 auto;border: 1px solid #f1f1f1; background-color: #F7F7F7;position:relative;">
		<div class="em-bg" style="background-color: #ffc799; height: 510px; position: absolute; left: 0; right: 0; top: 0; z-index: 0; border-bottom-left-radius: 35px; border-bottom-right-radius: 35px;">
			<table style="width:100%; max-width:100%; margin:0 auto; border-collapse: collapse;position:relative;z-index: 2;">
				<tr>
					<td>
						<table style="width:100%;border-collapse: collapse;">
							<tr>
								<td>
									<table style="width:100%;border-collapse: collapse;">
										<tr>
											<td colspan="2" style="padding: 5px 15px; text-align:center">
												
											</td>
										</tr>
									</table>
								</td>
							</tr>
							<tr>
								<td>
									
								</td>
							</tr>
						</table>
						<table style="width:100%;border-collapse: collapse;background-color:#fff;max-width:600px; margin: 0 auto;border-radius: 10px;">
							<tr>
								<td colspan="2" style="padding: 50px 55px 0px; text-align:center;">
                <a href="${gskDomain}" target="_blank">
												<img style="width: 100%; max-width: 150px;" src="${
                          data.logo || rentdigicareLogo
                        }"/>
												</a>                      

									<h2 style="color: #a5040b; font-family: 'Poppins', sans-serif; font-weight: 600; margin: 0 0 25px; font-size: 25px;">Dear ${
                    data.applicantName
                  },</h2>
									<p style="font-family: 'Poppins', sans-serif; color: #3f2c0f; font-size: 15px; max-width: 640px; width: 100%; margin-left: auto; margin-right: auto; margin-bottom: 30px;">
  Hey there! <br/>
  Just a quick heads up that we have your appointment coming up in the next 30 minutes, scheduled for ${
    data.date
  } at ${
      data.startTime
    }. We're looking forward to seeing you! Please make sure to arrive on time for your appointment.
</p>
<p style="font-family: 'Poppins', sans-serif; color: #3f2c0f; font-size: 15px; max-width: 640px; width: 100%; margin-left: auto; margin-right: auto; margin-bottom: 10px;font-weight:600;">Appointment Details :-</p>
									<p style="font-family: 'Poppins', sans-serif; color: #231F1F; font-size: 15px; max-width: 640px; width: 100%; margin-left: auto; margin-right: auto; margin-bottom: 30px;">Date : ${
                    data.date
                  }</br>
Start Time : ${data.startTime} (MST)</br>
End Time : ${data.endTime} (MST)</br>
                                 Property Name : ${data.property} <br>
                                      Property Layout Type : ${data.layout} <br>

</p>


<a href="${
      data.companyDomain
    }" style="background-color: #3f2c0f; color: #fff; text-decoration: none; font-family: 'Poppins', sans-serif; font-size: 14px; padding: 13px 70px; border-radius: 50px;display: inline-block;    margin-bottom: 15px;" href="#">Website</a><br/>
<a href="${domain}/cancel-appointment/${
      data.id
    }" style="background-color: #480707; color: #fff; text-decoration: none; font-family: 'Poppins', sans-serif; font-size: 14px; padding: 13px 70px; border-radius: 50px;display: inline-block;    margin-bottom: 15px;">Cancel Appointment</a>

									<p style="font-family: 'Poppins', sans-serif; color: #3f2c0f; font-size: 15px; max-width: 640px; width: 100%; margin-left: auto; margin-right: auto; margin-bottom: 30px;">Best regards,</p> 
									<p style="font-family: 'Poppins', sans-serif; color: #3f2c0f; font-size: 15px; max-width: 640px; width: 100%; margin-left: auto; margin-right: auto; margin-bottom: 30px;">Gsk properties</p>
								</td>
							</tr>
							
						</table>
						  <table style="width:100%;border-collapse: collapse;background-color:transparent;max-width:600px; margin: 0 auto;border-bottom-left-radius: 10px;border-bottom-right-radius: 10px;">
                            <tr>
                                <td colspan="2" style="padding: 0px 0px; text-align:center;">
                                    <img style="width: 100%; display:block;" src="${greyshape}"/>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2" style="padding: 0px 0px; text-align:center;">
                                    <img style="width: 100%; display:block;max-width:130px;    margin: 10px auto 25px;" src="${
                                      data.logo || rentdigicareLogo
                                    }"/>
                                </td>
                            </tr>
                        </table>
					 <table style="width:100%; background-color:transparent;border-collapse: collapse;">
                            <tr>
                                <td colspan="2" style="padding: 40px 15px; text-align:center;">
                                    <p style="color: #3f2c0f; font-size: 15px; font-family: 'Poppins', sans-serif; margin: 15px 0;">©Copyrights 2024 - <a style="font-family: 'Poppins', sans-serif; text-decoration: none; color: #553710; font-size: 15px;font-weight: 600;" href="${
                                      data.companyDomain
                                    }">${
      data.companyDomain
    }</a> - All rights reserved</p>
                                    <p style="color: #3f2c0f; font-size: 15px; font-family: 'Poppins', sans-serif; margin: 15px 0;">Don’t like these emails? <a style="font-family: 'Poppins', sans-serif; text-decoration: none; color: #553710; font-size: 15px;font-weight: 600;" href="#">Unsubscribe</a> or <a style="font-family: 'Poppins', sans-serif; text-decoration: none; color: #553710; font-size: 15px;font-weight: 600;" href="#">Manage Email Subscriptions</a></p>
                                </td>
                            </tr>
                        </table>
                    </td> 
                </tr>
            </table>
        </div>
    </div></div>
</div>
</body>
</html>`;
  }
  if (emailFor === "REMINDER_APPOINTMENT_30_MINUTES_TO_USER") {
    return `<!DOCTYPE html>
<html>
<head>
<title>Appointment Reminder - Customer</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
<style>
body {
    margin: 0;
}
</style>
</head>
<body>
<div class="email-tempate" style="margin: 50px 0;">
	<div class="email-inner" style="width:100%; max-width:760px; margin:0 auto;border: 1px solid #f1f1f1; background-color: #F7F7F7;position:relative;">
		<div class="em-bg" style="background-color: #ffc799; height: 510px; position: absolute; left: 0; right: 0; top: 0; z-index: 0; border-bottom-left-radius: 35px; border-bottom-right-radius: 35px;">
			<table style="width:100%; max-width:100%; margin:0 auto; border-collapse: collapse;position:relative;z-index: 2;">
				<tr>
					<td>
						<table style="width:100%;border-collapse: collapse;">
							<tr>
								<td>
									<table style="width:100%;border-collapse: collapse;">
										<tr>
											<td colspan="2" style="padding: 5px 15px; text-align:center">
												
											</td>
										</tr>
									</table>
								</td>
							</tr>
							<tr>
								<td>
									
								</td>
							</tr>
						</table>
						<table style="width:100%;border-collapse: collapse;background-color:#fff;max-width:600px; margin: 0 auto;border-radius: 10px;">
							<tr>
								<td colspan="2" style="padding: 50px 55px 0px; text-align:center;">
                <a href="${gskDomain}" target="_blank">
												<img style="width: 100%; max-width: 150px;" src="${
                          data.logo || rentdigicareLogo
                        }"/>
												</a>                      

									<h2 style="color: #a5040b; font-family: 'Poppins', sans-serif; font-weight: 600; margin: 0 0 25px; font-size: 25px;">Dear ${
                    data.applicantName
                  },</h2>
									<p style="font-family: 'Poppins', sans-serif; color: #3f2c0f; font-size: 15px; max-width: 640px; width: 100%; margin-left: auto; margin-right: auto; margin-bottom: 30px;">
  Hey there! <br/>
  Just a quick heads up that we have your appointment coming up in the next 30 minutes, scheduled for ${
    data.date
  } at ${
      data.startTime
    }. We're looking forward to seeing you! Please make sure to arrive on time for your appointment.
</p>
<p style="font-family: 'Poppins', sans-serif; color: #3f2c0f; font-size: 15px; max-width: 640px; width: 100%; margin-left: auto; margin-right: auto; margin-bottom: 10px;font-weight:600;">Appointment Details :-</p>
									<p style="font-family: 'Poppins', sans-serif; color: #231F1F; font-size: 15px; max-width: 640px; width: 100%; margin-left: auto; margin-right: auto; margin-bottom: 30px;">Date : ${
                    data.date
                  }</br>
Start Time : ${data.startTime} (MST)</br>
End Time : ${data.endTime} (MST)</br>
                                 Property Name : ${data.property} <br>
                                      Property Layout Type : ${data.layout} <br>

</p>


<a href="${
      data.companyDomain
    }" style="background-color: #3f2c0f; color: #fff; text-decoration: none; font-family: 'Poppins', sans-serif; font-size: 14px; padding: 13px 70px; border-radius: 50px;display: inline-block;    margin-bottom: 15px;" href="#">Website</a><br/>
<a href="${domain}/cancel-appointment/${
      data.id
    }" style="background-color: #480707; color: #fff; text-decoration: none; font-family: 'Poppins', sans-serif; font-size: 14px; padding: 13px 70px; border-radius: 50px;display: inline-block;    margin-bottom: 15px;">Cancel Appointment</a>
									<p style="font-family: 'Poppins', sans-serif; color: #3f2c0f; font-size: 15px; max-width: 640px; width: 100%; margin-left: auto; margin-right: auto; margin-bottom: 30px;">If you need to reschedule or cancel your appointment, please contact us as soon as possible.
We look forward to meeting with you.</p> 
									<p style="font-family: 'Poppins', sans-serif; color: #3f2c0f; font-size: 15px; max-width: 640px; width: 100%; margin-left: auto; margin-right: auto; margin-bottom: 30px;">Best regards,</p> 
									<p style="font-family: 'Poppins', sans-serif; color: #3f2c0f; font-size: 15px; max-width: 640px; width: 100%; margin-left: auto; margin-right: auto; margin-bottom: 30px;">Gsk properties</p>
								</td>
							</tr>
							
						</table>
						  <table style="width:100%;border-collapse: collapse;background-color:transparent;max-width:600px; margin: 0 auto;border-bottom-left-radius: 10px;border-bottom-right-radius: 10px;">
                            <tr>
                                <td colspan="2" style="padding: 0px 0px; text-align:center;">
                                    <img style="width: 100%; display:block;" src="${greyshape}"/>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2" style="padding: 0px 0px; text-align:center;">
                                    <img style="width: 100%; display:block;max-width:130px;    margin: 10px auto 25px;" src="${
                                      data.logo || rentdigicareLogo
                                    }"/>
                                </td>
                            </tr>
                        </table>
					 <table style="width:100%; background-color:transparent;border-collapse: collapse;">
                            <tr>
                                <td colspan="2" style="padding: 40px 15px; text-align:center;">
                                    <p style="color: #3f2c0f; font-size: 15px; font-family: 'Poppins', sans-serif; margin: 15px 0;">©Copyrights 2024 - <a style="font-family: 'Poppins', sans-serif; text-decoration: none; color: #553710; font-size: 15px;font-weight: 600;" href="${
                                      data.companyDomain
                                    }">${
      data.companyDomain
    }</a> - All rights reserved</p>
                                    <p style="color: #3f2c0f; font-size: 15px; font-family: 'Poppins', sans-serif; margin: 15px 0;">Don’t like these emails? <a style="font-family: 'Poppins', sans-serif; text-decoration: none; color: #553710; font-size: 15px;font-weight: 600;" href="#">Unsubscribe</a> or <a style="font-family: 'Poppins', sans-serif; text-decoration: none; color: #553710; font-size: 15px;font-weight: 600;" href="#">Manage Email Subscriptions</a></p>
                                </td>
                            </tr>
                        </table>
                    </td> 
                </tr>
            </table>
        </div>
    </div></div>
</div>
</body>
</html>`;
  }
  if (emailFor === "REMINDER_APPOINTMENT_12_HOURS") {
    return `<!DOCTYPE html>
<html>
<head>
<title>Appointment Reminder</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
<style>
body {
    margin: 0;
}
</style>
</head>
<body>
<div class="email-tempate" style="margin: 50px 0;">
	<div class="email-inner" style="width:100%; max-width:760px; margin:0 auto;border: 1px solid #f1f1f1; background-color: #F7F7F7;position:relative;">
		<div class="em-bg" style="background-color: #2C423F; height: 510px; position: absolute; left: 0; right: 0; top: 0; z-index: 0; border-bottom-left-radius: 35px; border-bottom-right-radius: 35px;">
			<table style="width:100%; max-width:100%; margin:0 auto; border-collapse: collapse;position:relative;z-index: 2;">
				<tr>
					<td>
						<table style="width:100%;border-collapse: collapse;">
							<tr>
								<td>
									<table style="width:100%;border-collapse: collapse;">
										<tr>
											<td colspan="2" style="padding: 5px 15px; text-align:center">
												
											</td>
										</tr>
									</table>
								</td>
							</tr>
							<tr>
								<td>
									
								</td>
							</tr>
						</table>
						<table style="width:100%;border-collapse: collapse;background-color:#fff;max-width:600px; margin: 0 auto;border-radius: 10px;">
							<tr>
								<td colspan="2" style="padding: 50px 55px 0px; text-align:center;">
                <a href="${gskDomain}" target="_blank">
												<img style="width: 100%; max-width: 150px;" src="${
                          data.logo || rentdigicareLogo
                        }"/>
												</a>                      

									<h2 style="color: #4C5B61; font-family: 'Poppins', sans-serif; font-weight: 600; margin: 0 0 25px; font-size: 25px;">Dear ${
                    data.applicantName
                  },</h2>
									<p style="font-family: 'Poppins', sans-serif; color: #414242; font-size: 15px; max-width: 640px; width: 100%; margin-left: auto; margin-right: auto; margin-bottom: 30px;">
 Hello there! <br/>
Just a friendly reminder that your appointment is scheduled in the next 12 hours, set for ${
      data.date
    } at ${
      data.startTime
    }. We're looking forward to your participation and kindly ask that you arrive punctually. 

See you soon!
<p style="font-family: 'Poppins', sans-serif; color: #414242; font-size: 15px; max-width: 640px; width: 100%; margin-left: auto; margin-right: auto; margin-bottom: 10px;font-weight:600;">Appointment Details :-</p>
									<p style="font-family: 'Poppins', sans-serif; color: #414242; font-size: 15px; max-width: 640px; width: 100%; margin-left: auto; margin-right: auto; margin-bottom: 30px;">Date : ${
                    data.date
                  }</br>
Start Time : ${data.startTime} (MST)</br>
End Time : ${data.endTime} (MST)</br>
                                 Property Name : ${data.property} <br>
                                      Property Layout Type : ${data.layout} <br>

</p>


<a href="${
      data.companyDomain
    }" style="background-color: rgb(56, 56, 56); color: #fff; text-decoration: none; font-family: 'Poppins', sans-serif; font-size: 14px; padding: 13px 70px; border-radius: 50px;display: inline-block;    margin-bottom: 15px;" href="#">Website</a><br/>
<a href="${domain}/cancel-appointment/${
      data.id
    }" style="background-color: #949B96; color: #fff; text-decoration: none; font-family: 'Poppins', sans-serif; font-size: 14px; padding: 13px 70px; border-radius: 50px;display: inline-block;    margin-bottom: 15px;">Cancel Appointment</a>
									<p style="font-family: 'Poppins', sans-serif; color: #414242; font-size: 15px; max-width: 640px; width: 100%; margin-left: auto; margin-right: auto; margin-bottom: 30px;">If you need to reschedule or cancel your appointment, please contact us as soon as possible.
We look forward to meeting with you.</p> 
									<p style="font-family: 'Poppins', sans-serif; color: #6c6e6c; font-size: 15px; max-width: 640px; width: 100%; margin-left: auto; margin-right: auto; margin-bottom: 30px;">Best regards,</p> 
									<p style="font-family: 'Poppins', sans-serif; color: #6c6e6c; font-size: 15px; max-width: 640px; width: 100%; margin-left: auto; margin-right: auto; margin-bottom: 30px;">Gsk properties</p>
								</td>
							</tr>
							
						</table>
						  <table style="width:100%;border-collapse: collapse;background-color:transparent;max-width:600px; margin: 0 auto;border-bottom-left-radius: 10px;border-bottom-right-radius: 10px;">
                            <tr>
                                <td colspan="2" style="padding: 0px 0px; text-align:center;">
                                    <img style="width: 100%; display:block;" src="${greyshape}"/>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2" style="padding: 0px 0px; text-align:center;">
                                    <img style="width: 100%; display:block;max-width:130px;    margin: 10px auto 25px;" src="${
                                      data.logo || rentdigicareLogo
                                    }"/>
                                </td>
                            </tr>
                        </table>
					 <table style="width:100%; background-color:transparent;border-collapse: collapse;">
                            <tr>
                                <td colspan="2" style="padding: 40px 15px; text-align:center;">
                                    <p style="color: #414242; font-size: 15px; font-family: 'Poppins', sans-serif; margin: 15px 0;">©Copyrights 2024 - <a style="font-family: 'Poppins', sans-serif; text-decoration: none; color: #1a1816; font-size: 15px;font-weight: 600;" href="${
                                      data.companyDomain
                                    }">${
      data.companyDomain
    }</a> - All rights reserved</p>
                                    <p style="color: #414242; font-size: 15px; font-family: 'Poppins', sans-serif; margin: 15px 0;">Don’t like these emails? <a style="font-family: 'Poppins', sans-serif; text-decoration: none; color: #1a1816; font-size: 15px;font-weight: 600;" href="#">Unsubscribe</a> or <a style="font-family: 'Poppins', sans-serif; text-decoration: none; color: #553710; font-size: 15px;font-weight: 600;" href="#">Manage Email Subscriptions</a></p>
                                </td>
                            </tr>
                        </table>
                    </td> 
                </tr>
            </table>
        </div>
    </div></div>
</div>
</body>
</html>`;
  }
  if (emailFor === "REMINDER_APPOINTMENT_12_HOURS_TO_USER") {
    return `<!DOCTYPE html>
<html>
<head>
<title>Appointment Reminder</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
<style>
body {
    margin: 0;
}
</style>
</head>
<body>
<div class="email-tempate" style="margin: 50px 0;">
	<div class="email-inner" style="width:100%; max-width:760px; margin:0 auto;border: 1px solid #f1f1f1; background-color: #F7F7F7;position:relative;">
		<div class="em-bg" style="background-color: #ffc799; height: 510px; position: absolute; left: 0; right: 0; top: 0; z-index: 0; border-bottom-left-radius: 35px; border-bottom-right-radius: 35px;">
			<table style="width:100%; max-width:100%; margin:0 auto; border-collapse: collapse;position:relative;z-index: 2;">
				<tr>
					<td>
						<table style="width:100%;border-collapse: collapse;">
							<tr>
								<td>
									<table style="width:100%;border-collapse: collapse;">
										<tr>
											<td colspan="2" style="padding: 5px 15px; text-align:center">
												
											</td>
										</tr>
									</table>
								</td>
							</tr>
							<tr>
								<td>
									
								</td>
							</tr>
						</table>
						<table style="width:100%;border-collapse: collapse;background-color:#fff;max-width:600px; margin: 0 auto;border-radius: 10px;">
							<tr>
								<td colspan="2" style="padding: 50px 55px 0px; text-align:center;">
                <a href="${gskDomain}" target="_blank">
												<img style="width: 100%; max-width: 150px;" src="${
                          data.logo || rentdigicareLogo
                        }"/>
												</a>                      

									<h2 style="color: #a5040b; font-family: 'Poppins', sans-serif; font-weight: 600; margin: 0 0 25px; font-size: 25px;">Dear ${
                    data.applicantName
                  },</h2>
									<p style="font-family: 'Poppins', sans-serif; color: #3f2c0f; font-size: 15px; max-width: 640px; width: 100%; margin-left: auto; margin-right: auto; margin-bottom: 30px;">
  Hey there! <br/>
  Just a quick heads up that we have your appointment coming up in the next 30 minutes, scheduled for ${
    data.date
  } at ${
      data.startTime
    }. We're looking forward to seeing you! Please make sure to arrive on time for your appointment.
</p>
<p style="font-family: 'Poppins', sans-serif; color: #3f2c0f; font-size: 15px; max-width: 640px; width: 100%; margin-left: auto; margin-right: auto; margin-bottom: 10px;font-weight:600;">Appointment Details :-</p>
									<p style="font-family: 'Poppins', sans-serif; color: #231F1F; font-size: 15px; max-width: 640px; width: 100%; margin-left: auto; margin-right: auto; margin-bottom: 30px;">Date : ${
                    data.date
                  }</br>
Start Time : ${data.startTime} (MST)</br>
End Time : ${data.endTime} (MST)</br>
                                 Property Name : ${data.property} <br>
                                      Property Layout Type : ${data.layout} <br>

</p>


<a href="${
      data.companyDomain
    }" style="background-color: #3f2c0f; color: #fff; text-decoration: none; font-family: 'Poppins', sans-serif; font-size: 14px; padding: 13px 70px; border-radius: 50px;display: inline-block;    margin-bottom: 15px;" href="#">Website</a><br/>
<a href="${domain}/cancel-appointment/${
      data.id
    }" style="background-color: #480707; color: #fff; text-decoration: none; font-family: 'Poppins', sans-serif; font-size: 14px; padding: 13px 70px; border-radius: 50px;display: inline-block;    margin-bottom: 15px;">Cancel Appointment</a>
									<p style="font-family: 'Poppins', sans-serif; color: #3f2c0f; font-size: 15px; max-width: 640px; width: 100%; margin-left: auto; margin-right: auto; margin-bottom: 30px;">If you need to reschedule or cancel your appointment, please contact us as soon as possible.
We look forward to meeting with you.</p> 
									<p style="font-family: 'Poppins', sans-serif; color: #3f2c0f; font-size: 15px; max-width: 640px; width: 100%; margin-left: auto; margin-right: auto; margin-bottom: 30px;">Best regards,</p> 
									<p style="font-family: 'Poppins', sans-serif; color: #3f2c0f; font-size: 15px; max-width: 640px; width: 100%; margin-left: auto; margin-right: auto; margin-bottom: 30px;">Gsk properties</p>
								</td>
							</tr>
							
						</table>
						  <table style="width:100%;border-collapse: collapse;background-color:transparent;max-width:600px; margin: 0 auto;border-bottom-left-radius: 10px;border-bottom-right-radius: 10px;">
                            <tr>
                                <td colspan="2" style="padding: 0px 0px; text-align:center;">
                                    <img style="width: 100%; display:block;" src="${greyshape}"/>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2" style="padding: 0px 0px; text-align:center;">
                                    <img style="width: 100%; display:block;max-width:130px;    margin: 10px auto 25px;" src="${
                                      data.logo || rentdigicareLogo
                                    }"/>
                                </td>
                            </tr>
                        </table>
					 <table style="width:100%; background-color:transparent;border-collapse: collapse;">
                            <tr>
                                <td colspan="2" style="padding: 40px 15px; text-align:center;">
                                    <p style="color: #3f2c0f; font-size: 15px; font-family: 'Poppins', sans-serif; margin: 15px 0;">©Copyrights 2024 - <a style="font-family: 'Poppins', sans-serif; text-decoration: none; color: #553710; font-size: 15px;font-weight: 600;" href="${
                                      data.companyDomain
                                    }">${
      data.companyDomain
    }</a> - All rights reserved</p>
                                    <p style="color: #3f2c0f; font-size: 15px; font-family: 'Poppins', sans-serif; margin: 15px 0;">Don’t like these emails? <a style="font-family: 'Poppins', sans-serif; text-decoration: none; color: #553710; font-size: 15px;font-weight: 600;" href="#">Unsubscribe</a> or <a style="font-family: 'Poppins', sans-serif; text-decoration: none; color: #553710; font-size: 15px;font-weight: 600;" href="#">Manage Email Subscriptions</a></p>
                                </td>
                            </tr>
                        </table>
                    </td> 
                </tr>
            </table>
        </div>
    </div></div>
</div>
</body>
</html>`;
  }
  if (emailFor === "SEND_MAIL_TO_ALL_ASSIGNED_VENDORS") {
    return `
    <!DOCTYPE html>
    <html>
    <head>
    <title>Send Mail to All Assigned</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <style>
    body {
        margin: 0;
    }
    </style>
    </head>
    <body>
    <div class="email-tempate" style="margin: 50px 0;">
      <div class="email-inner" style="width:100%; max-width:760px; margin:0 auto;border: 1px solid #f1f1f1; background-color: #F7F7F7;position:relative;">
        <div class="em-bg" style="background-color: #126E82; height: 510px; position: absolute; left: 0; right: 0; top: 0; z-index: 0; border-bottom-left-radius: 35px; border-bottom-right-radius: 35px;">
          <table style="width:100%; max-width:100%; margin:0 auto; border-collapse: collapse;position:relative;z-index: 2;">
            <tr>
              <td>
                <table style="width:100%;border-collapse: collapse;">
                  <tr>
                    <td>
                      <table style="width:100%;border-collapse: collapse;">
                        <tr>
                          <td colspan="2" style="padding: 5px 15px; text-align:center">
                            <img style="width: 100%; max-width: 150px;" src="${
                              data.logo || rentdigicareLogo
                            }"/>
                            </a>  
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      
                    </td>
                  </tr>
                </table>
                <table style="width:100%;border-collapse: collapse;background-color:#fff;max-width:600px; margin: 0 auto;border-radius: 10px;">
                                
                  <tr>
                    <td colspan="2" style="padding: 50px 55px 0px; text-align:center;">
                    <!-- <a href="${gskDomain}" target="_blank">
                            <img style="width: 100%; max-width: 150px;" src="${
                              data.logo || rentdigicareLogo
                            }"/>
                            </a>         -->
                                                    <h1 style="color: #132C33; font-family: 'Poppins', sans-serif; font-weight: 700; margin: 0 0 25px; font-size: 25px;">New Maintenance Request Assigned!</h1>
                                                        <span class="es-button-border" style="border-style:solid;border-color:#132C33;background:none 0% 0% repeat scroll #26a4d3;border-width:0px;display:inline-block;border-radius:50px;width:auto;margin-top: 5px;"><a href="${domain}/login" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;transition:all 100ms ease-in;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:14px;border-style:solid;border-color:#132C33;border-width:15px 30px 15px 30px;display:inline-block;background:#132C33;border-radius:50px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:bold;font-style:normal;line-height:17px;width:auto;text-align:center">ACCESS ACCOUNT</a></span>           
    
                      <p style="color: #132C33; font-family: 'Poppins', sans-serif; font-weight: 600; margin: 10px 0 25px; font-size: 18px;">Dear ${
                        data.vendorName
                      },</p>
                                          <p style="color: #000000; font-family: 'Poppins', sans-serif;  margin: 10px 0 0; font-size: 15px;">
                                            You have received a maintenance request from ${
                                              data.propertyManager
                                            } - ${
      data.propertyManagerEmail
    } for ${data.propertyName} Property and Suite - ${data.suite} .
                                          </p>
                                          <p style="color: #132C33; font-family: 'Poppins', sans-serif; font-weight: 600; margin: 10px 0 25px; font-size: 18px;">Details:</p>
                                          
                      
                                          <p style="font-family: 'Poppins', sans-serif; color: #000000; font-size: 15px; max-width: 640px; width: 100%; margin-left: auto; margin-right: auto; margin-bottom: 30px;">
                                            <strong style="color: #132C33;">Request Type:</strong> ${
                                              data.requestType
                                            }</br>
                                            <strong style="color: #132C33;">Permission To Enter Suite:</strong> ${
                                              data.permission
                                            }</br>
                                            <strong style="color: #132C33;">Property:</strong> ${
                                              data.propertyName
                                            } </br>
                                            <strong style="color: #132C33;">Suite:</strong> ${
                                              data.suite
                                            } </br>
                                            <strong style="color: #132C33;">Description:</strong> ${
                                              data.details
                                            } </br><br>
                                            (Please feel free to contact the  Property Manager.)
                                            <br><br>
                                            If the above "ACCESS ACCOUNT" button does not work then click on link below:
                                            <br>
                                            <a style="color: #132C33;font-weight: 600;" href="${domain}/Login">${domain}/Login</a>
                                          </p>
                                          
    
                      <p style="font-family: 'Poppins', sans-serif; color: #000000; font-size: 15px; max-width: 640px; width: 100%; margin-left: auto; margin-right: auto;">Cheers,</p> 
                      <p style="font-family: 'Poppins', sans-serif; color: #000000; font-size: 15px; max-width: 640px; width: 100%; margin-left: auto; margin-right: auto; margin-bottom: 30px;"><strong>Team ${
                        data.companyName
                      }</strong></p>
                    </td>
                  </tr>
                  
                </table>
                  <table style="width:100%;border-collapse: collapse;background-color:transparent;max-width:600px; margin: 0 auto;border-bottom-left-radius: 10px;border-bottom-right-radius: 10px;">
                                <tr>
                                    <td colspan="2" style="padding: 0px 0px; text-align:center;">
                                        <img style="width: 100%; display:block;" src="${greyshape}"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2" style="padding: 0px 0px; text-align:center;">
                                        <img style="width: 100%; display:block;max-width:130px;    margin: 10px auto 25px;" src="${
                                          data.logo || rentdigicareLogo
                                        }"/>
                                    </td>
                                </tr>
                            </table>
               <table style="width:100%; background-color:transparent;border-collapse: collapse;">
                                <tr>
                                    <td colspan="2" style="padding: 40px 15px; text-align:center;">
                                        <p style="color: #414242; font-size: 15px; font-family: 'Poppins', sans-serif; margin: 15px 0;">©Copyrights 2024 - <a style="font-family: 'Poppins', sans-serif; text-decoration: none; color: #1a1816; font-size: 15px;font-weight: 600;" href="${
                                          data.companyDomain
                                            ? data.companyDomain
                                            : rentdigicareWebsite
                                        }">${
      data.companyDomain ? data.companyDomain : rentdigicareWebsite
    }
</a> - All rights reserved</p>
                                        <p style="color: #414242; font-size: 15px; font-family: 'Poppins', sans-serif; margin: 15px 0;">Don’t like these emails? <a style="font-family: 'Poppins', sans-serif; text-decoration: none; color: #1a1816; font-size: 15px;font-weight: 600;" href="#">Unsubscribe</a> or <a style="font-family: 'Poppins', sans-serif; text-decoration: none; color: #553710; font-size: 15px;font-weight: 600;" href="#">Manage Email Subscriptions</a></p>
                                    </td>
                                </tr>
                            </table>
                        </td> 
                    </tr>
                </table>
            </div>
        </div></div>
    </div>
    </body>
    </html>
  `;
  }

  if (emailFor === "QUOTE_TICKET_BY_VENDOR") {
    return `
    <!DOCTYPE html>
    <html>
    <head>
    <title>Quote Ticket By Vendor</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <style>
    body {
        margin: 0;
    }
    </style>
    </head>
    <body>
    <div class="email-tempate" style="margin: 50px 0;">
      <div class="email-inner" style="width:100%; max-width:760px; margin:0 auto;border: 1px solid #f1f1f1; background-color: #F7F7F7;position:relative;">
        <div class="em-bg" style="background-color: #e17570; height: 510px; position: absolute; left: 0; right: 0; top: 0; z-index: 0; border-bottom-left-radius: 35px; border-bottom-right-radius: 35px;">
          <table style="width:100%; max-width:100%; margin:0 auto; border-collapse: collapse;position:relative;z-index: 2;">
            <tr>
              <td>
                <table style="width:100%;border-collapse: collapse;">
                  <tr>
                    <td>
                      <table style="width:100%;border-collapse: collapse;">
                        <tr>
                          <td colspan="2" style="padding: 5px 15px; text-align:center">
                            <img style="width: 100%; max-width: 150px;" src="${
                              data.logo || rentdigicareLogo
                            }"/>
                            </a>  
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      
                    </td>
                  </tr>
                </table>
                <table style="width:100%;border-collapse: collapse;background-color:#fff;max-width:600px; margin: 0 auto;border-radius: 10px;">
                                
                  <tr>
                    <td colspan="2" style="padding: 50px 55px 0px; text-align:center;">
                    <!-- <a href="${gskDomain}" target="_blank">
                            <img style="width: 100%; max-width: 150px;" src="${
                              data.logo || rentdigicareLogo
                            }"/>
                            </a>         -->
                                                    <h1 style="color: #16A596; font-family: 'Poppins', sans-serif; font-weight: 700; margin: 0 0 25px; font-size: 30px;">New Quote Received!</h1>
                                                        <span class="es-button-border" style="border-style:solid;border-color:#16A596;background:none 0% 0% repeat scroll #26a4d3;border-width:0px;display:inline-block;border-radius:50px;width:auto;margin-top: 5px;"><a href="${domain}/login" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;transition:all 100ms ease-in;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:14px;border-style:solid;border-color:#16A596;border-width:15px 30px 15px 30px;display:inline-block;background:#16A596;border-radius:50px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:bold;font-style:normal;line-height:17px;width:auto;text-align:center">ACCESS ACCOUNT</a></span>           
    
                      <p style="color: #16A596; font-family: 'Poppins', sans-serif; font-weight: 600; margin: 10px 0 25px; font-size: 18px;">Dear ${
                        data.propertyManager
                      },</p>
                                          <p style="color: #000000; font-family: 'Poppins', sans-serif;  margin: 10px 0 0; font-size: 15px;">
                                            You have received a quote for maintenance request from ${
                                              data.vendorName
                                            } (${data.vendorEmail}) for ${
      data.propertyName
    } and Suite - ${data.suite}.
                                          </p>
                                          <p style="color: #16A596; font-family: 'Poppins', sans-serif; font-weight: 600; margin: 10px 0 25px; font-size: 18px;">Details:</p>
                                          
                      
                                          <p style="font-family: 'Poppins', sans-serif; color: #000000; font-size: 15px; max-width: 640px; width: 100%; margin-left: auto; margin-right: auto; margin-bottom: 30px;">
                                            <strong style="color: #16A596;">Agency Name:</strong> ${
                                              data.agencyName
                                            }</br>
                                            <strong style="color: #16A596;">Start date/time:</strong> $${
                                              data.startDate
                                            }-${data.startTime}</br>
                                            <strong style="color: #16A596;">End date/time:</strong> ${
                                              data.endDate
                                            }-${data.endTime} </br>
                                            <strong style="color: #16A596;">Estimated Amount: </strong> ${
                                              data.estimatedAmount
                                            } </br>
                                            <strong style="color: #16A596;">Notes:</strong>${
                                              data.notes
                                            } </br>
                                            <br>
                                            ( Please feel free to contact the Vendor.)
                                            <br><br>
                                            If the above "ACCESS ACCOUNT" button does not work then click on link below:
                                            <br>
                                            <a style="color: #16A596;font-weight: 600;" href="${domain}/Login">${domain}/Login</a>
                                          </p>
                                          
    
                      <p style="font-family: 'Poppins', sans-serif; color: #000000; font-size: 15px; max-width: 640px; width: 100%; margin-left: auto; margin-right: auto;">Cheers,</p> 
                      <p style="font-family: 'Poppins', sans-serif; color: #16A596; font-size: 15px; max-width: 640px; width: 100%; margin-left: auto; margin-right: auto; margin-bottom: 30px;"><strong>Team ${
                        data.companyName
                      }</strong></p>
                    </td>
                  </tr>
                  
                </table>
                  <table style="width:100%;border-collapse: collapse;background-color:transparent;max-width:600px; margin: 0 auto;border-bottom-left-radius: 10px;border-bottom-right-radius: 10px;">
                                <tr>
                                    <td colspan="2" style="padding: 0px 0px; text-align:center;">
                                        <img style="width: 100%; display:block;" src="${greyshape}"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2" style="padding: 0px 0px; text-align:center;">
                                        <img style="width: 100%; display:block;max-width:130px;    margin: 10px auto 25px;" src="${
                                          data.logo || rentdigicareLogo
                                        }"/>
                                    </td>
                                </tr>
                            </table>
               <table style="width:100%; background-color:transparent;border-collapse: collapse;">
                                <tr>
                                    <td colspan="2" style="padding: 40px 15px; text-align:center;">
                                 <p style="color: #414242; font-size: 15px; font-family: 'Poppins', sans-serif; margin: 15px 0;">©Copyrights 2024 - <a style="font-family: 'Poppins', sans-serif; text-decoration: none; color: #1a1816; font-size: 15px;font-weight: 600;" href="${
                                   data.companyDomain
                                     ? data.companyDomain
                                     : rentdigicareWebsite
                                 }">${
      data.companyDomain ? data.companyDomain : rentdigicareWebsite
    }
</a> - All rights reserved</p>
                                        <p style="color: #414242; font-size: 15px; font-family: 'Poppins', sans-serif; margin: 15px 0;">Don’t like these emails? <a style="font-family: 'Poppins', sans-serif; text-decoration: none; color: #1a1816; font-size: 15px;font-weight: 600;" href="#">Unsubscribe</a> or <a style="font-family: 'Poppins', sans-serif; text-decoration: none; color: #553710; font-size: 15px;font-weight: 600;" href="#">Manage Email Subscriptions</a></p>
                                    </td>
                                </tr>
                            </table>
                        </td> 
                    </tr>
                </table>
            </div>
        </div></div>
    </div>
    </body>
    </html>
  `;
  }

  if (emailFor === "QUOTE_APPROVED") {
    return `
    <!DOCTYPE html>
    <html>
    <head>
    <title>Quote Approved</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <style>
    body {
        margin: 0;
    }
    </style>
    </head>
    <body>
    <div class="email-tempate" style="margin: 50px 0;">
      <div class="email-inner" style="width:100%; max-width:760px; margin:0 auto;border: 1px solid #f1f1f1; background-color: #F7F7F7;position:relative;">
        <div class="em-bg" style="background-color: #5F685A; height: 510px; position: absolute; left: 0; right: 0; top: 0; z-index: 0; border-bottom-left-radius: 35px; border-bottom-right-radius: 35px;">
          <table style="width:100%; max-width:100%; margin:0 auto; border-collapse: collapse;position:relative;z-index: 2;">
            <tr>
              <td>
                <table style="width:100%;border-collapse: collapse;">
                  <tr>
                    <td>
                      <table style="width:100%;border-collapse: collapse;">
                        <tr>
                          <td colspan="2" style="padding: 5px 15px; text-align:center">
                            <img style="width: 100%; max-width: 150px;" src="${
                              data.logo || rentdigicareLogo
                            }"/>
                            </a>  
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      
                    </td>
                  </tr>
                </table>
                <table style="width:100%;border-collapse: collapse;background-color:#fff;max-width:600px; margin: 0 auto;border-radius: 10px;">
                                
                  <tr>
                    <td colspan="2" style="padding: 50px 55px 0px; text-align:center;">
                    <!-- <a href="${gskDomain}" target="_blank">
                            <img style="width: 100%; max-width: 150px;" src="${
                              data.logo || rentdigicareLogo
                            }"/>
                            </a>         -->
                                                    <h1 style="color: #EA9C1B; font-family: 'Poppins', sans-serif; font-weight: 700; margin: 0 0 25px; font-size: 30px;">Quote Accepetd!</h1>
                                                        <span class="es-button-border" style="border-style:solid;border-color:#EA9C1B;background:none 0% 0% repeat scroll #26a4d3;border-width:0px;display:inline-block;border-radius:50px;width:auto;margin-top: 5px;"><a href="${domain}/login" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;transition:all 100ms ease-in;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:14px;border-style:solid;border-color:#EA9C1B;border-width:15px 30px 15px 30px;display:inline-block;background:#EA9C1B;border-radius:50px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:bold;font-style:normal;line-height:17px;width:auto;text-align:center">ACCESS ACCOUNT</a></span>           
    
                      <p style="color: #EA9C1B; font-family: 'Poppins', sans-serif; font-weight: 600; margin: 10px 0 25px; font-size: 18px;">Dear ${
                        data.vendorName
                      },</p>
                                          <p style="color: #000000; font-family: 'Poppins', sans-serif;  margin: 10px 0 0; font-size: 15px;">
                                            Your quote for maintenance request has been accepted from ${
                                              data.propertyManager
                                            } (${
      data.propertyManagerEmail
    }) for ${data.propertyName} and Suite - ${data.suite}.
                                          </p>
                                          <p style="color: #EA9C1B; font-family: 'Poppins', sans-serif; font-weight: 600; margin: 10px 0 25px; font-size: 18px;">Details:</p>
                                          
                      
                                          <p style="font-family: 'Poppins', sans-serif; color: #000000; font-size: 15px; max-width: 640px; width: 100%; margin-left: auto; margin-right: auto; margin-bottom: 30px;">
                                            <strong style="color: #EA9C1B;">Agency Name:</strong> ${
                                              data.agencyName
                                            }</br>
                                            <strong style="color: #EA9C1B;">Start date/time:</strong> $${
                                              data.startDate
                                            }-${data.startTime}</br>
                                            <strong style="color: #EA9C1B;">End date/time:</strong> ${
                                              data.endDate
                                            }-${data.endTime} </br>
                                            <strong style="color: #EA9C1B;">Estimated Amount: </strong> ${
                                              data.estimatedAmount
                                            } </br>
                                            <strong style="color: #EA9C1B;">Notes:</strong>${
                                              data.notes
                                            } </br>
                                            <br>
                                            ( Please feel free to contact the Customer/Property manager.)
                                            <br><br>
                                            If the above "ACCESS ACCOUNT" button does not work then click on link below:
                                            <br>
                                            <a style="color: #EA9C1B;font-weight: 600;" href="${domain}/Login">${domain}/Login</a>
                                          </p>
                                          
    
                      <p style="font-family: 'Poppins', sans-serif; color: #000000; font-size: 15px; max-width: 640px; width: 100%; margin-left: auto; margin-right: auto;">Cheers,</p> 
                      <p style="font-family: 'Poppins', sans-serif; color: #EA9C1B; font-size: 15px; max-width: 640px; width: 100%; margin-left: auto; margin-right: auto; margin-bottom: 30px;"><strong>Team ${
                        data.companyName
                      }</strong></p>
                    </td>
                  </tr>
                  
                </table>
                  <table style="width:100%;border-collapse: collapse;background-color:transparent;max-width:600px; margin: 0 auto;border-bottom-left-radius: 10px;border-bottom-right-radius: 10px;">
                                <tr>
                                    <td colspan="2" style="padding: 0px 0px; text-align:center;">
                                        <img style="width: 100%; display:block;" src="${greyshape}"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2" style="padding: 0px 0px; text-align:center;">
                                        <img style="width: 100%; display:block;max-width:130px;    margin: 10px auto 25px;" src="${
                                          data.logo || rentdigicareLogo
                                        }"/>
                                    </td>
                                </tr>
                            </table>
               <table style="width:100%; background-color:transparent;border-collapse: collapse;">
                                <tr>
                                    <td colspan="2" style="padding: 40px 15px; text-align:center;">
                                        <p style="color: #414242; font-size: 15px; font-family: 'Poppins', sans-serif; margin: 15px 0;">©Copyrights 2024 - <a style="font-family: 'Poppins', sans-serif; text-decoration: none; color: #1a1816; font-size: 15px;font-weight: 600;" href="${
                                          data.companyDomain
                                        }">${
      data.companyDomain
    }</a> - All rights reserved</p>
                                        <p style="color: #414242; font-size: 15px; font-family: 'Poppins', sans-serif; margin: 15px 0;">Don’t like these emails? <a style="font-family: 'Poppins', sans-serif; text-decoration: none; color: #1a1816; font-size: 15px;font-weight: 600;" href="#">Unsubscribe</a> or <a style="font-family: 'Poppins', sans-serif; text-decoration: none; color: #553710; font-size: 15px;font-weight: 600;" href="#">Manage Email Subscriptions</a></p>
                                    </td>
                                </tr>
                            </table>
                        </td> 
                    </tr>
                </table>
            </div>
        </div></div>
    </div>
    </body>
    </html>
  `;
  }

  if (emailFor === "REQUEST_STATUS_UPDATE") {
    return `<head>
<title>Appointment Reminder</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap" rel="stylesheet">
<style>
body {
    margin: 0;
}
</style>
</head>
<body>
<div class="email-tempate" style="margin: 50px 0;">
	<div class="email-inner" style="width:100%; max-width:760px; margin:0 auto;border: 1px solid #f1f1f1; background-color: #F7F7F7;position:relative;">
	<div class="em-bg" style="background-color: ${getStatusColor(
    data.toStatus
  )}; height: 510px; position: absolute; left: 0; right: 0; top: 0; z-index: 0; border-bottom-left-radius: 35px; border-bottom-right-radius: 35px;">
        	<table style="width:100%; max-width:100%; margin:0 auto; border-collapse: collapse;position:relative;z-index: 2;">
				<tbody><tr>
					<td>
						<table style="width:100%;border-collapse: collapse;">
							<tbody><tr>
								<td>
									<table style="width:100%;border-collapse: collapse;">
										<tbody><tr>
											<td colspan="2" style="padding: 5px 15px; text-align:center">
												
											</td>
										</tr>
									</tbody></table>
								</td>
							</tr>
							<tr>
								<td>
									
								</td>
							</tr>
						</tbody></table>
						<table style="width:100%;border-collapse: collapse;background-color:#fff;max-width:600px; margin: 0 auto;border-radius: 10px;">
							<tbody>
								<tr>
								<td colspan="2" style="padding: 50px 55px 0px; text-align:center;">
						                <a href="${gskDomain}" target="_blank">
											<img style="width: 100%; max-width: 150px;" src="${
                        data.logo || rentdigicareLogo
                      }">
										</a>                      

									<h2 style="color: #622e30;font-family: 'Poppins', sans-serif;font-weight: 600;margin: 0 0 25px;font-size: 25px;">Dear ${
                    data.propertyManager
                  },</h2>
									<p style="font-family: 'Poppins', sans-serif; color: #3f2c0f; font-size: 15px; margin-bottom: 30px;">
										Good Day Team, We have an Update for you.!<br>
										Maintenance request status changed to ${data.toStatus}.
									</p>
									<p style="font-family: 'Poppins', sans-serif;color: #622e30;font-size: 15px;margin-bottom: 10px;font-weight: 600;">Appointment Details :</p>
									<p style="font-family: 'Poppins', sans-serif; color: #231F1F; font-size: 15px; margin-bottom: 30px;">
										Request Type: ${data.requestType}</br>
                                        Permission To Enter Suite: ${
                                          data.permission
                                        }</br>
                                        Property: ${data.propertyName}</br>
                                        Suite: ${data.suite}</br>
                                        Phone: ${data.phone}</br>
                                        Description: ${data.details}
									</p>
									<p style="font-family: 'Poppins', sans-serif; color: #3f2c0f; font-size: 15px; max-width: 640px; width: 100%; margin-left: auto; margin-right: auto; margin-bottom: 30px;"> Please feel free to contact the ${
                    data.vendorType
                  }/Property manager.</p> 
									<p style="font-family: 'Poppins', sans-serif;color: #3f2c0f;font-size: 15px;max-width: 640px;width: 100%;margin-left: auto;margin-right: auto;margin-bottom: 10px;">Best regards,</p> 
									<p style="font-family: 'Poppins', sans-serif; color: #3f2c0f; font-size: 15px; max-width: 640px; width: 100%; margin-left: auto; margin-right: auto; margin-bottom: 30px;">Team ${
                    data.companyName
                  }</p>
								</td>
								</tr>
							</tbody>
						</table>
						<table style="width:100%;border-collapse: collapse;background-color:transparent;max-width:600px; margin: 0 auto;border-bottom-left-radius: 10px;border-bottom-right-radius: 10px;">
                            <tbody>
								<tr>
                                <td colspan="2" style="padding: 0px 0px; text-align:center;">
                                    <img style="width: 100%; display:block;" src="${greyshape}"/>
                                </td>
                            	</tr>
                            	<tr>
                                <td colspan="2" style="padding: 0px 0px; text-align:center;">
                                    <img style="width: 100%; display:block;max-width:130px;    margin: 10px auto 25px;" src="${
                                      data.logo || rentdigicareLogo
                                    }">
                                </td>
                            	</tr>
                        	</tbody>
						</table>
					 	<table style="width:100%; background-color:transparent;border-collapse: collapse;">
							<tbody>
								<tr>
									<td colspan="2" style="padding: 40px 15px; text-align:center;">
										<p style="color: #3f2c0f; font-size: 15px; font-family: 'Poppins', sans-serif; margin: 5px 0;">
											©Copyrights 2024 
											- All rights reserved
										</p>
										<p style="color: #3f2c0f; font-size: 15px; font-family: 'Poppins', sans-serif; margin: 15px 0;">
											Don’t like these emails? 
											<a style="font-family: 'Poppins', sans-serif; text-decoration: none; color: #553710; font-size: 15px; font-weight: 600;" href="#">Unsubscribe</a> 
											or 
											<a style="font-family: 'Poppins', sans-serif; text-decoration: none; color: #553710; font-size: 15px; font-weight: 600;" href="#">Manage Email Subscriptions</a>
										</p>
									</td>
								</tr>
							</tbody>
						</table>
                    </td> 
                </tr>
            </tbody>
			</table>
        </div>
    </div>
</div>
<script>
    function getStatusColor(status) {
        switch(status) {
            case 'Open':
                return '#0000ff'; // Blue
            case 'Inprogress':
                return '#ffff00'; // Yellow
            case 'Completed':
                return '#00ff00'; // Green
            case 'Unresolved':
                return '#ff0000'; // Red
            case 'Pending':
                 return '#dbd3cd'; // Default color
            default:
                return '#dbd3cd'; // Default color
        }
    }
</script>
</body>
`;
  }

  if (emailFor === "CUSTOMER_RATING" || "ADD_CUSTOMER") {
    return `
    <!DOCTYPE html>
    <html>
    <head>
    <title>Customer Rating</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <style>
    body {
        margin: 0;
    }
    </style>
    </head>
    <body>
    <div class="email-tempate" style="margin: 50px 0;">
      <div class="email-inner" style="width:100%; max-width:760px; margin:0 auto;border: 1px solid #f1f1f1; background-color: #F7F7F7;position:relative;">
        <div class="em-bg" style="background-color: #3D0240; height: 510px; position: absolute; left: 0; right: 0; top: 0; z-index: 0; border-bottom-left-radius: 35px; border-bottom-right-radius: 35px;">
          <table style="width:100%; max-width:100%; margin:0 auto; border-collapse: collapse;position:relative;z-index: 2;">
            <tr>
              <td>
                <table style="width:100%;border-collapse: collapse;">
                  <tr>
                    <td>
                      <table style="width:100%;border-collapse: collapse;">
                        <tr>
                          <td colspan="2" style="padding: 5px 15px; text-align:center">
                            <img style="width: 100%; max-width: 150px;" src="${
                              data.logo || rentdigicareLogo
                            }"/>
                            </a>  
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      
                    </td>
                  </tr>
                </table>
                <table style="width:100%;border-collapse: collapse;background-color:#fff;max-width:600px; margin: 0 auto;border-radius: 10px;">
                                
                  <tr>
                    <td colspan="2" style="padding: 50px 55px 0px; text-align:center;">
                    <!-- <a href="${gskDomain}" target="_blank">
                            <img style="width: 100%; max-width: 150px;" src="${
                              data.logo || rentdigicareLogo
                            }"/>
                            </a>         -->
                                                    <h1 style="color: #393232; font-family: 'Poppins', sans-serif; font-weight: 700; margin: 0 0 25px; font-size: 30px;">${
                                                      data?.toStatus || ""
                                                    } Status!</h1>
                                                        <span class="es-button-border" style="border-style:solid;border-color:#393232;background:none 0% 0% repeat scroll #26a4d3;border-width:0px;display:inline-block;border-radius:50px;width:auto;margin-top: 5px;"><a href="${domain}/login" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;transition:all 100ms ease-in;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:14px;border-style:solid;border-color:#393232;border-width:15px 30px 15px 30px;display:inline-block;background:#393232;border-radius:50px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:bold;font-style:normal;line-height:17px;width:auto;text-align:center">ACCESS ACCOUNT</a></span>           
    
                      <p style="color: #393232; font-family: 'Poppins', sans-serif; font-weight: 600; margin: 10px 0 25px; font-size: 18px;">Dear ${
                        data?.propertyManager || ""
                      },</p>
                                          <p style="color: #000000; font-family: 'Poppins', sans-serif;  margin: 10px 0 0; font-size: 15px;">
                                            Maintenance request status changed to ${
                                              data?.toStatus || ""
                                            }.
                                          </p>
                                          <p style="color: #393232; font-family: 'Poppins', sans-serif; font-weight: 600; margin: 10px 0 25px; font-size: 18px;">Details:</p>
                                          
                      
                                          <p style="font-family: 'Poppins', sans-serif; color: #000000; font-size: 15px; max-width: 640px; width: 100%; margin-left: auto; margin-right: auto; margin-bottom: 30px;">
                                            <strong style="color: #393232;">Request Type:</strong> ${
                                              data?.requestType || ""
                                            }</br>
                                            <strong style="color: #393232;">Permission To Enter Suite:</strong> ${
                                              data?.permission || ""
                                            }</br>
                                            <strong style="color: #393232;">Property:</strong> ${
                                              data?.propertyName || ""
                                            }</br>
                                            <strong style="color: #393232;">Suite: </strong>  ${
                                              data?.suite || ""
                                            } </br>
                                            <strong style="color: #393232;">Description:</strong>${
                                              data?.details || ""
                                            }</br>
                                            <br>
                                            ( Please feel free to contact the Customer/${
                                              data?.vendorType || ""
                                            }.)
                                            <br><br>
                                            If the above "ACCESS ACCOUNT" button does not work then click on link below:
                                            <br>
                                            <a style="color: #393232;font-weight: 600;" href="${domain}/Login">${domain}/Login</a>
                                          </p>
                                          
    
                      <p style="font-family: 'Poppins', sans-serif; color: #000000; font-size: 15px; max-width: 640px; width: 100%; margin-left: auto; margin-right: auto;">Cheers,</p> 
                      <p style="font-family: 'Poppins', sans-serif; color: #393232; font-size: 15px; max-width: 640px; width: 100%; margin-left: auto; margin-right: auto; margin-bottom: 30px;"><strong>Team ${
                        data.companyName
                      }</strong></p>
                    </td>
                  </tr>
                  
                </table>
                  <table style="width:100%;border-collapse: collapse;background-color:transparent;max-width:600px; margin: 0 auto;border-bottom-left-radius: 10px;border-bottom-right-radius: 10px;">
                                <tr>
                                    <td colspan="2" style="padding: 0px 0px; text-align:center;">
                                        <img style="width: 100%; display:block;" src="${greyshape}"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2" style="padding: 0px 0px; text-align:center;">
                                        <img style="width: 100%; display:block;max-width:130px;    margin: 10px auto 25px;" src="${
                                          data.logo || rentdigicareLogo
                                        }"/>
                                    </td>
                                </tr>
                            </table>
               <table style="width:100%; background-color:transparent;border-collapse: collapse;">
                                <tr>
                                    <td colspan="2" style="padding: 40px 15px; text-align:center;">
                                        <p style="color: #414242; font-size: 15px; font-family: 'Poppins', sans-serif; margin: 15px 0;">©Copyrights 2024 - <a style="font-family: 'Poppins', sans-serif; text-decoration: none; color: #1a1816; font-size: 15px;font-weight: 600;" href="${
                                          data.companyDomain
                                        }">${
      data.companyDomain
    }</a> - All rights reserved</p>
                                        <p style="color: #414242; font-size: 15px; font-family: 'Poppins', sans-serif; margin: 15px 0;">Don’t like these emails? <a style="font-family: 'Poppins', sans-serif; text-decoration: none; color: #1a1816; font-size: 15px;font-weight: 600;" href="#">Unsubscribe</a> or <a style="font-family: 'Poppins', sans-serif; text-decoration: none; color: #553710; font-size: 15px;font-weight: 600;" href="#">Manage Email Subscriptions</a></p>
                                    </td>
                                </tr>
                            </table>
                        </td> 
                    </tr>
                </table>
            </div>
        </div></div>
    </div>
    </body>
    </html>
  `;
  }
};
