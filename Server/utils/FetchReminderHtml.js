exports.get = (emailFor, data) => {
  const domain = process.env.DOMAIN;
  const rentdigicareDomain =
    process.env.RENTDIGICARE_DOMAIN + ":" + process.env.PORT;

  // const serverAddress = process.env.DOMAIN + ":" + process.env.PORT;
  // const gskLogo = `${rentdigicareDomain}/images/gsklogo.png`;
  // const gskLogo1 = `${rentdigicareDomain}/images/gsklogo1.jpg`;
  // const rentdigicareLogo = `${rentdigicareDomain}/images/rentdigicarelogo.png`;

  // website domain
  const gskDomain = process.env.GSK_DOMAIN;
  const greyshape = `https://rdclive.nyc3.cdn.digitaloceanspaces.com/grey-shape-2.png`;
  const emailIcon = `https://rdclive.nyc3.cdn.digitaloceanspaces.com/email-icon.png`;

  if (emailFor === "APPLICATION_REMINDER") {
    return `<!DOCTYPE html>
<html>
<head>
    <title>Application Reminder</title>
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
    <div class="email-template" style="margin: 50px 0;">
        <div class="email-inner" style="width:100%; max-width:760px; margin:0 auto;border: 1px solid #f1f1f1; background-color: #F7F7F7;position:relative;">
            <div class="em-bg" style="background-color: #e75f5f; height: 510px; position: absolute; left: 0; right: 0; top: 0; z-index: 0; border-bottom-left-radius: 35px; border-bottom-right-radius: 35px;">
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
                                         <a href="https://app.rentdigicare.com" target="_blank">
                                                        <img style="width: 100%; max-width: 200px; margin-bottom: 4rem;" src="https://app.rentdigicare.com/static/media/logo-sm.761bae40.svg" alt="GSK Logo"/>
                                                    </a>
                                        <h2 style="color: #e75f5f; font-family: 'Poppins', sans-serif; font-weight: 600; margin: 0 0 15px; font-size: 25px;">Dear ${
                                          data?.name
                                        },</h2>
                                        <p style="font-family: 'Poppins', sans-serif; color: #231F1F; font-size: 15px; max-width: 640px; width: 100%; margin-left: auto; margin-right: auto; margin-bottom: 30px; margin-top: 0;">Exciting news! We've got an update on your application status.

Just wanted to drop a quick note to say great job so far! Your enthusiasm and dedication continues to shine through !</p>
                                        <a href="${domain}/login" style="background-color: #231f1f; color: #fff; text-decoration: none; font-family: 'Poppins', sans-serif; font-size: 14px; padding: 13px 70px; border-radius: 50px;display: inline-block; margin-bottom: 15px;">ACCESS YOUR ACCOUNT</a>
                                        <table style="width:100%;border-collapse: collapse;border: 1px solid #f1f1f1;">
                                            <tr>
                                                <thead>
                                                    <th style="font-family: 'Poppins', sans-serif; padding: 10px 10px; background-color: transparent; font-size: 14px; color: #FFBF53; font-weight: 500;">Pending</th>
                                                    <th style="font-family: 'Poppins', sans-serif; padding: 10px 10px; background-color: transparent; font-size: 14px; color: green; font-weight: 500;">Approved</th>
                                                    <th style="font-family: 'Poppins', sans-serif; padding: 10px 10px; background-color: transparent; font-size: 14px; color: red; font-weight: 500;">Denied</th>
                                                    <th style="font-family: 'Poppins', sans-serif; padding: 10px 10px; background-color: transparent; font-size: 14px; color: black; font-weight: 500;">Total</th>
                                                </thead>
                                                <tbody> 
                                                    <td style="font-family: 'Poppins', sans-serif; padding: 10px; border: 1px solid #f1f1f1; font-size: 14px;">${
                                                      data.pending
                                                    }</td>
                                                    <td style="font-family: 'Poppins', sans-serif; padding: 10px; border: 1px solid #f1f1f1; font-size: 14px;">${
                                                      data.approved
                                                    }</td>
                                                    <td style="font-family: 'Poppins', sans-serif; padding: 10px; border: 1px solid #f1f1f1; font-size: 14px;">${
                                                      data.denied
                                                    }</td>
                                                    <td style="font-family: 'Poppins', sans-serif; padding: 10px; border: 1px solid #f1f1f1; font-size: 14px;">${
                                                      data.pending +
                                                      data.approved +
                                                      data.denied
                                                    }</td>
                                                </tbody>
                                            </tr>
                                        </table>
                                        <p style="font-family: 'Poppins', sans-serif; color: #231F1F; font-size: 15px; max-width: 640px; width: 100%; margin-left: auto; margin-right: auto; margin-bottom: 30px;">Click on the link below to login: <a style="color:#e75f5f;" href="${domain}/Login">${domain}</a></p> 
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
                                    <img style="width: 100%; display:block;max-width:130px;    margin: 10px auto 25px;"  src="https://app.rentdigicare.com/static/media/logo-sm.761bae40.svg"/>
                                </td>
                            </tr>
                        </table>
					 <table style="width:100%; background-color:transparent;border-collapse: collapse;">
                            <tr>
                               <td colspan="2" style="padding: 40px 15px; text-align:center;">
                                    <p style="color: #231f1f; font-size: 15px; font-family: 'Poppins', sans-serif; margin: 15px 0;">©Copyrights 2024 - <a style="font-family: 'Poppins', sans-serif; text-decoration: none; color: #553710; font-size: 15px;font-weight: 600;" href="https://app.rentdigicare.com/">https://app.rentdigicare.com/</a> - All rights reserved</p>
                                    <p style="color: #231f1f; font-size: 15px; font-family: 'Poppins', sans-serif; margin: 15px 0;">Don’t like these emails? <a style="font-family: 'Poppins', sans-serif; text-decoration: none; color: #553710; font-size: 15px;font-weight: 600;" href="#">Unsubscribe</a> or <a style="font-family: 'Poppins', sans-serif; text-decoration: none; color: #553710; font-size: 15px;font-weight: 600;" href="#">Manage Email Subscriptions</a></p>
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

  if (emailFor === "COMPANY_USER_REPORT_OF_MANAGERS") {
    const tableRows = data.managerData
      .map((item) => {
        const propertyTitles = item.properties.map(
          (property) => property.title
        );
        const propertyTitlesString = propertyTitles.join(", ");
        return `
        <tr>
          <td>${item.firstname} ${item.lastname}</td>
          <td>${propertyTitlesString}</td>
          <td>${item.pending + item.approved + item.denied}</td>
          <td>${item.pending}</td>
          <td>${item.approved}</td>
          <td>${item.denied}</td>
        </tr>
      `;
      })
      .join("");
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
#myTable {
  width: 100%;
  border-collapse: collapse;
}

#myTable th,
#myTable td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid black;
  border-bottom: 1px solid #ddd;
  font-size: 14px; /* Adjust the font size to your preference */
}

#myTable th {
  background-color: #f2f2f2;
}

#tableBody tr:hover {
  background-color: #f5f5f5;
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
                    <td align="center" style="padding:0;Margin:0;font-size:0; "><a href="${gskDomain}" target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#ffffff;font-size:14px"><img src=${
      data.logo || rentdigicareLogo
    } alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; height:76px;weight:150px" ></a></td> 
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
                    <td align="center" style="padding:0;Margin:0;padding-bottom:10px;padding-top:40px"><h1 style="Margin:0;line-height:36px;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;font-size:30px;font-style:normal;font-weight:bold;color:#ffffff">APPLICATION STATUS</h1></td> 
                   </tr> 
                   <tr style="border-collapse:collapse"> 
                    <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:20px"><span class="es-button-border" style="border-style:solid;border-color:#26a4d3;background:none 0% 0% repeat scroll #26a4d3;border-width:0px;display:inline-block;border-radius:50px;width:auto"><a href="${domain}/login" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;transition:all 100ms ease-in;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:14px;border-style:solid;border-color:#26a4d3;border-width:15px 30px 15px 30px;display:inline-block;background:#26a4d3;border-radius:50px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:bold;font-style:normal;line-height:17px;width:auto;text-align:center">ACCESS ACCOUNT</a></span></td> 
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
  if (emailFor === "NEW_TICKET_FOR_USER") {
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
											<img style="width: 100%; max-width: 150px;" src="${
                        data.logo || rentdigicareLogo
                      }">
										</a>                      

									<h2 style="color: #622e30;font-family: 'Poppins', sans-serif;font-weight: 600;margin: 0 0 25px;font-size: 25px;">Dear ${
                    data.applicantName
                  },</h2>
									<p style="font-family: 'Poppins', sans-serif; color: #3f2c0f; font-size: 15px; margin-bottom: 30px;">
										Hey there!<br>
										We have received your maintenance request for the property ${data.propertyName}.
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
									<p style="font-family: 'Poppins', sans-serif; color: #3f2c0f; font-size: 15px; max-width: 640px; width: 100%; margin-left: auto; margin-right: auto; margin-bottom: 30px;">You will recieve an update once your query has been resolved.</p> 
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

  if (emailFor === "LEADS_FOR_SUPER_ADMIN") {
    return `<!DOCTYPE html>
    <html>
    <head>
    <title>Leads For SuperAdmin</title>
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
        <div class="em-bg" style="background-color: #528352; height: 510px; position: absolute; left: 0; right: 0; top: 0; z-index: 0; border-bottom-left-radius: 35px; border-bottom-right-radius: 35px;">
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
                                                    <h1 style="color: #163020; font-family: 'Poppins', sans-serif; font-weight: 700; margin: 0 0 25px; font-size: 35px;">Application Received!</h1>
                                                        <span class="es-button-border" style="border-style:solid;border-color:#26a4d3;background:none 0% 0% repeat scroll #26a4d3;border-width:0px;display:inline-block;border-radius:50px;width:auto;margin-top: 5px;"><a href="${domain}/login" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;transition:all 100ms ease-in;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:14px;border-style:solid;border-color:#163020;border-width:15px 30px 15px 30px;display:inline-block;background:#163020;border-radius:50px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:bold;font-style:normal;line-height:17px;width:auto;text-align:center">ACCESS ACCOUNT</a></span>           
    
                      <p style="color: #163020; font-family: 'Poppins', sans-serif; font-weight: 600; margin: 10px 0 25px; font-size: 18px;">Dear SuperAdmin,</p>
                                          <p style="color: #000000; font-family: 'Poppins', sans-serif;  margin: 10px 0 0; font-size: 15px;">
                                            You have recieved a lead from ${
                                              data.applicantName
                                            }.
                                          </p>
                                          <p style="color: #163020; font-family: 'Poppins', sans-serif; font-weight: 600; margin: 10px 0 25px; font-size: 18px;">Details:</p>
                                          
                      
                                          <p style="font-family: 'Poppins', sans-serif; color: #000000; font-size: 15px; max-width: 640px; width: 100%; margin-left: auto; margin-right: auto; margin-bottom: 30px;">
                                            <strong style="color: #163020;">Lead Name :</strong> ${
                                              data.applicantName
                                            }</br>
                                            <strong style="color: #163020;">Contact No:</strong> ${
                                              data.phone
                                            }</br>
                                            <strong style="color: #163020;">Email:</strong> ${
                                              data.email
                                            } </br>
                                            <strong style="color: #163020;">Company:</strong> ${
                                              data.company
                                            } </br><br>
                                            (Please feel free to contact Us.)
                                            <br><br>
                                            If the above "ACCESS ACCOUNT" button does not work then click on link below:
                                            <br>
                                            <a style="color: #163020;font-weight: 600;" href="${domain}/Login">${domain}/Login</a>
                                          </p>
                                          
    
                      <p style="font-family: 'Poppins', sans-serif; color: #000000; font-size: 15px; max-width: 640px; width: 100%; margin-left: auto; margin-right: auto;">Cheers,</p> 
                      <p style="font-family: 'Poppins', sans-serif; color: #000000; font-size: 15px; max-width: 640px; width: 100%; margin-left: auto; margin-right: auto; margin-bottom: 30px;">Team Rentdigicare</p>
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

  if (emailFor === "REQUEST_REASSIGN_VENDOR") {
    return `
 <html><head>
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
		<div class="em-bg" style="background-color: #030202;height: 510px;position: absolute;left: 0;right: 0;top: 0;z-index: 0;border-bottom-left-radius: 35px;border-bottom-right-radius: 35px;">
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
							<tbody><tr>
								<td colspan="2" style="padding: 50px 55px 0px; text-align:center;">
                                    <a href="${gskDomain}" target="_blank">
                                        <img style="width: 100%; max-width: 150px;" src="${
                                          data.logo || rentdigicareLogo
                                        }">
                                    </a>                      

									<h2 style="color: #a5040b; font-family: 'Poppins', sans-serif; font-weight: 600; margin: 0 0 25px; font-size: 25px;">Dear ${
                    data.owner
                  },</h2>
                                    <p style="font-family: 'Poppins', sans-serif; color: #3f2c0f; font-size: 15px; max-width: 640px; width: 100%; margin-left: auto; margin-right: auto; margin-bottom: 30px;">
                                        Hello! <br>
                                        We hope this message finds you in good spirits. We wanted to let you know that a maintenance request has been reassigned back to you.
                                    </p>

                                    <p style="font-family: 'Poppins', sans-serif; color: #3f2c0f; font-size: 15px; max-width: 640px; width: 100%; margin-left: auto; margin-right: auto; margin-bottom: 10px; font-weight: 600;">Ticket Details :</p>

                                    <p style="font-family: 'Poppins', sans-serif; color: #3f2c0f; font-size: 15px;">
                                        Reassigned By: ${data.reassignedBy}<br>
                                        Role: ${data.role}<br>
                                        Request Type: ${data.requestType}<br>
                                        Permission To Enter: ${
                                          data.permission
                                        }<br>
                                        Property: ${data.propertyName}<br>
                                        Suite: ${data.suite}<br>
                                        Phone: ${data.phone}<br>
                                        Description: ${data.details}<br>
                                    </p>

                                    <a href="${
                                      data.companyDomain
                                    }" style="background-color: #5b0000;color: #fff;text-decoration: none;font-family: 'Poppins', sans-serif;font-size: 14px;padding: 13px 70px;border-radius: 50px;display: inline-block;margin-bottom: 15px;">Website</a><br>


									<p style="font-family: 'Poppins', sans-serif; color: #3f2c0f; font-size: 15px; max-width: 640px; width: 100%; margin-left: auto; margin-right: auto; margin-bottom: 30px;">Cheers,<br><strong>Team ${
                    data.companyName
                  }</strong></p><p></p>
								</td>
							</tr>
							
						</tbody></table>
						  <table style="width:100%;border-collapse: collapse;background-color:transparent;max-width:600px; margin: 0 auto;border-bottom-left-radius: 10px;border-bottom-right-radius: 10px;">
                            <tbody><tr>
                                <td colspan="2" style="padding: 0px 0px; text-align:center;">
                                    <img style="width: 100%; display:block;" src="${greyshape}">
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2" style="padding: 0px 0px; text-align:center;">
                                    <img style="width: 100%; display:block;max-width:130px;    margin: 10px auto 25px;" src="${
                                      data.logo || rentdigicareLogo
                                    }">
                                </td>
                            </tr>
                        </tbody></table>
					 <table style="width:100%; background-color:transparent;border-collapse: collapse;">
                            <tbody><tr>
                                <td colspan="2" style="padding: 40px 15px; text-align:center;">
                                    <p style="color: #3f2c0f; font-size: 15px; font-family: 'Poppins', sans-serif; margin: 15px 0;">©Copyrights 2024 - <a style="font-family: 'Poppins', sans-serif; text-decoration: none; color: #553710; font-size: 15px;font-weight: 600;" href="${
                                      data.companyDomain
                                    }">${
      data.companyDomain
    }</a> - All rights reserved</p>
                                    <p style="color: #3f2c0f; font-size: 15px; font-family: 'Poppins', sans-serif; margin: 15px 0;">Don’t like these emails? <a style="font-family: 'Poppins', sans-serif; text-decoration: none; color: #553710; font-size: 15px;font-weight: 600;" href="#">Unsubscribe</a> or <a style="font-family: 'Poppins', sans-serif; text-decoration: none; color: #553710; font-size: 15px;font-weight: 600;" href="#">Manage Email Subscriptions</a></p>
                                </td>
                            </tr>
                        </tbody></table>
                    </td> 
                </tr>
            </tbody></table>
        </div>
    </div></div>


</body></html>`;
  }
};
