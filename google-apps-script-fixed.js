// Google Apps Script for Studycircle Registration Form
// This code should be deployed as a Web App in Google Apps Script

// Configure your Google Sheet
const SHEET_ID = '1L9qOU8KrhOekutnd5_uUUxfl9Gv8QE1fMONu-khDrjc';
const SHEET_NAME = 'Registrations';

function doPost(e) {
  try {
    // Parse the JSON data from the request
    const data = JSON.parse(e.postData.contents);
    
    // Open the specific Google Sheet by ID
    const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);
    
    // If sheet doesn't exist, create it
    if (!sheet) {
      sheet = spreadsheet.insertSheet(SHEET_NAME);
      
      // Add headers
      const headers = [
        'Timestamp',
        'First Name',
        'Last Name',
        'Email',
        'Phone',
        'Plan',
        'Message',
        'Language'
      ];
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      
      // Format headers
      const headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#4285f4');
      headerRange.setFontColor('#ffffff');
    }
    
    // Check if we need to add headers (for existing sheets)
    if (sheet.getLastRow() === 0) {
      const headers = [
        'Timestamp',
        'First Name',
        'Last Name',
        'Email',
        'Phone',
        'Plan',
        'Message',
        'Language'
      ];
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      
      // Format headers
      const headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#4285f4');
      headerRange.setFontColor('#ffffff');
    }
    
    // Prepare the row data
    const rowData = [
      data.timestamp || new Date().toISOString(),
      data.firstName || '',
      data.lastName || '',
      data.email || '',
      data.phone || '',
      data.plan || '',
      data.message || '',
      data.language || 'en'
    ];
    
    // Add the data to the sheet
    const nextRow = sheet.getLastRow() + 1;
    sheet.getRange(nextRow, 1, 1, rowData.length).setValues([rowData]);
    
    // Auto-resize columns
    sheet.autoResizeColumns(1, rowData.length);
    
    // Send confirmation email to admin
    try {
      const adminEmail = 'studycircle564@gmail.com';
      const subject = `New Registration: ${data.firstName} ${data.lastName}`;
      const body = `
New registration received for Studycircle Summer Program:

Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phone}
Plan: ${data.plan}
Message: ${data.message}
Language: ${data.language}
Timestamp: ${data.timestamp}

Please follow up with the student as soon as possible.
      `;
      
      GmailApp.sendEmail(adminEmail, subject, body);
    } catch (emailError) {
      console.error('Email sending error:', emailError);
      // Don't fail the registration if email fails
    }
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Registration submitted successfully',
        row: nextRow
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error in doPost:', error);
    
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        message: 'Error submitting registration: ' + error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Handle GET requests (for testing)
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      message: 'Studycircle Registration Handler is running',
      timestamp: new Date().toISOString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
