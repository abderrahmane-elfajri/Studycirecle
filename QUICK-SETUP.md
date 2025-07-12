# 🚀 QUICK SETUP GUIDE - Deploy Google Apps Script

## STEP 1: Open Google Apps Script
1. Go to [script.google.com](https://script.google.com)
2. Click "New Project"

## STEP 2: Add the Code
1. Delete any existing code in the editor
2. Open the file `google-apps-script-fixed.js` from your website folder
3. Copy ALL the code from that file
4. Paste it into the Google Apps Script editor

## STEP 3: Deploy as Web App
1. Click "Deploy" (top right)
2. Click "New deployment"
3. Click the gear icon ⚙️ next to "Select type"
4. Choose "Web app"
5. Set these options:
   - **Description**: "Studycircle Registration"
   - **Execute as**: "Me"
   - **Who has access**: "Anyone"
6. Click "Deploy"
7. Click "Authorize access" and grant permissions
8. **COPY THE URL** - it looks like: `https://script.google.com/macros/s/AKfycbz...../exec`

## STEP 4: Update Your Website
1. Open `script.js` in notepad
2. Find this line (around line 676):
   ```javascript
   const GOOGLE_SCRIPT_URL = 'REPLACE_WITH_YOUR_ACTUAL_DEPLOYED_SCRIPT_URL';
   ```
3. Replace it with:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'YOUR_COPIED_URL_HERE';
   ```
4. Save the file

## STEP 5: Test
1. Open your `register.html` page
2. Fill out the form
3. Submit it
4. Check your Google Sheet: https://docs.google.com/spreadsheets/d/1L9qOU8KrhOekutnd5_uUUxfl9Gv8QE1fMONu-khDrjc/edit

## That's it! 🎉
Your registration form will now send data directly to your Google Sheet.

## If you need help:
- Use the `test-registration.html` page to check if everything is working
- Check the browser console for any error messages
- Make sure you copied the complete URL from Google Apps Script
