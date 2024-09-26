function doPost(e) {
    var sheet = SpreadsheetApp.openById('1rKMqG-MVHeOC_rAuO1GA8MU2eLjn-8m4gZKXG2wyGWY').getActiveSheet();
    var userName = e.parameter.username;
    var email = e.parameter.email;
    var password = e.parameter.password; // 注意：不建議存儲明文密碼

    sheet.appendRow([userName, email, password]);
    return ContentService.createTextOutput('Success');
}