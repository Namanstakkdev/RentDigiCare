
module.exports =  (content) => {

    return `


<!DOCTYPE html>
<html lang="en">
​
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ticket</title>
</head>
​
<body>
    <div bgcolor="#f6f6f6" style="color: #333; height: 100%; width: 100%;" height="100%" width="100%">
        <table bgcolor="#fefefe" cellspacing="0" style="border-collapse: collapse; padding: 40px; width: 100%;"
            width="100%">
            <tbody>
                <tr>
                    <td width="5px" style="padding: 0;"></td>
                    <td
                        style="border: 1px solid #000;  clear: both; display: block; margin: 0 auto; max-width: 820px; padding: 0;">
                        <table cellspacing="0" style="border-collapse: collapse; margin: 0 auto; max-width: 820px;">
                            <tbody style="max-width: 820px">
                                <tr>
                                    <td valign="top" style="padding: 20px; min-width: 780px; width: 100%">
                                        <h3 style="
                                                 text-transform: uppercase;
                                                    color: #fff;
                                                    font-family: 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif;
                                                    font-size: 18px;
                                                    font-weight: normal;
                                                    line-height: 1.2;
                                                    margin: 0;
                                                    margin-bottom: 15px;
                                                    background-color: #348eda;
                                                    padding: 8px 15px 4px;
                                            ">
                                            Ticket
                                        </h3>
                                        <table cellspacing="0"
                                            style="border-collapse: collapse; width: 100%;">
                                            <tbody>
                                                <tr>
                                                    <td style="padding: 5px 0;">Name </td>
                                                    <td align="right" style="padding: 5px 0;">${content.name} </td>
                                                </tr>
                                                <tr>
                                                    <td style="padding: 5px 0;">Email </td>
                                                    <td align="right" style="padding: 5px 0;">${content.email}</td>
                                                </tr>
                                                <tr>
                                                    <td style="padding: 5px 0;">Phone</td>
                                                    <td align="right" style="padding: 5px 0;">${content.phone}</td>
                                                </tr>
                                                <tr>
                                                    <td style="padding: 5px 0;">Request Type</td>
                                                    <td align="right" style="padding: 5px 0;">${content.requestType}</td>
                                                </tr>
                                                <tr>
                                                    <td style="padding: 5px 0;">Permission</td>
                                                    <td align="right" style="padding: 5px 0;">${content.permission}</td>
                                                </tr>
                                                <tr>
                                                    <td style="padding: 5px 0;">Property</td>
                                                    <td align="right" style="padding: 5px 0;">${content.property}</td>
                                                </tr>
                                                <tr>
                                                    <td style="padding: 5px 0;">Suite</td>
                                                    <td align="right" style="padding: 5px 0;">${content.suite}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
​
                                <tr>
                                    <td valign="top" style="padding: 20px; min-width: 500px;">
                                        <h3 style="
                                                    text-transform: uppercase;
                                                    color: #fff;
                                                    font-family: 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif;
                                                    font-size: 18px;
                                                    font-weight: normal;
                                                    line-height: 1.2;
                                                    margin: 0;
                                                    margin-bottom: 15px;
                                                    background-color: #348eda;
                                                    padding: 8px 15px 4px;
                                            ">
                                            Details
                                        </h3>
                                        <table cellspacing="0"
                                            style="border-collapse: collapse; margin-bottom: 40px; width: 100%;">
                                            <tbody>
                                                <tr>
                                                    <td style="padding: 5px 0;">Date </td>
                                                    <td align="right" style="padding: 5px 0;">${content.createdAt}</td>
                                                </tr>
                                            </tbody>
                                        </table>
​
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
        </td>
        <td width="5px" style="padding: 0;"></td>
        </tr>
​
        </tbody>
        </table>
    </div>
</body>
​
</html>`
}