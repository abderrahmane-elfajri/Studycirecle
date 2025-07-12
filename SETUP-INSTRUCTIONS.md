# Setup Instructions for Studycircle Registration Form

## 🚀 IMPORTANT: Google Apps Script Deployment Steps

### Step 1: Deploy the Google Apps Script
1. Go to [Google Apps Script](https://script.google.com)
2. Click "New Project"
3. Delete the default code
4. Copy and paste the code from `google-apps-script-fixed.js`
5. Save the project (name it "Studycircle Registration Handler")

### Step 2: Deploy as Web App
1. Click "Deploy" → "New Deployment"
2. Click the gear icon next to "Select type"
3. Choose "Web app"
4. Fill in the details:
   - **Description**: "Studycircle Registration Form"
   - **Execute as**: "Me"
   - **Who has access**: "Anyone"
5. Click "Deploy"
6. **IMPORTANT**: Copy the Web App URL (it looks like: `https://script.google.com/macros/s/AKfycbz.../exec`)

### Step 3: Update the Website Code
1. Open `script.js` in your website files
2. Find this line (around line 765): `const GOOGLE_SCRIPT_URL = 'REPLACE_WITH_YOUR_ACTUAL_DEPLOYED_SCRIPT_URL';`
3. Replace `REPLACE_WITH_YOUR_ACTUAL_DEPLOYED_SCRIPT_URL` with YOUR Web App URL from Step 2
4. It should look like: `const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz.../exec';`
5. Save the file

### Step 4: Test the Form
1. **Quick Test**: Open `test-registration.html` in your browser first
   - This will show you if the Google Apps Script URL is configured correctly
   - It will display any configuration errors clearly
   - Use this to submit a test registration

2. **Full Test**: Open `register.html` in your browser
   - Fill out the form with test data
   - Click "Submit Registration"
   - Check your Google Sheet: https://docs.google.com/spreadsheets/d/1L9qOU8KrhOekutnd5_uUUxfl9Gv8QE1fMONu-khDrjc/edit
   - You should see a new "Registrations" sheet with your test data

⚠️ **IMPORTANT**: If you see your email client opening instead of a success message, it means the Google Apps Script URL is not configured correctly. Make sure you completed Step 3 above.

## ✅ What the System Does:
- ✅ Sends registration data directly to your Google Sheet
- ✅ Creates a "Registrations" sheet automatically if it doesn't exist
- ✅ Adds headers automatically
- ✅ Sends email notifications to studycircle564@gmail.com
- ✅ Shows success/error messages to users
- ✅ No alerts or popups - clean user experience

## 📋 Your Google Sheet Configuration:
- **Sheet ID**: `1L9qOU8KrhOekutnd5_uUUxfl9Gv8QE1fMONu-khDrjc`
- **Sheet Link**: https://docs.google.com/spreadsheets/d/1L9qOU8KrhOekutnd5_uUUxfl9Gv8QE1fMONu-khDrjc/edit?usp=sharing
- **API Key**: `AIzaSyCzJE3U_XZhjVPukHjbVYmikwptj0sqY4k`
- **Sheet Name**: "Registrations" (created automatically)

## 📧 Email Notifications Setup (Optional)

The script will automatically send email notifications to:
- **You** (admin) - when someone registers
- **The student** - confirmation email

To customize emails:
1. In the Google Apps Script, find the `sendEmailNotification` function
2. Replace `studycircle564@gmail.com` with your email
3. Customize the email content as needed

## 🔧 Troubleshooting

### Common Issues:

1. **Form not submitting**
   - Check that the Google Apps Script URL is correct
   - Make sure the Web App is deployed with "Anyone" access
   - Check the browser console for errors

2. **Data not appearing in Google Sheets**
   - Verify the Google Apps Script has permissions to access your sheets
   - Check that the script is using the correct spreadsheet

3. **Email notifications not working**
   - Gmail might block the emails initially
   - Check your Gmail settings for Apps Script permissions

### Testing the Google Apps Script:
1. In Apps Script, run the `testScript()` function
2. Check the execution log for any errors
3. Verify test data appears in your Google Sheet

## 📊 Google Sheet Structure

Your Google Sheet will automatically have these columns:
- **Timestamp** - When the registration was submitted
- **First Name** - Student's first name
- **Last Name** - Student's last name
- **Email** - Student's email address
- **Phone** - Student's phone number
- **Plan** - Which program they selected
- **Message** - Any additional message from the student
- **Language** - Which language they were using on the site

## 🔐 Security Notes

- The Web App URL should be kept private
- Only share the registration form through your official website
- Regularly backup your Google Sheet data
- Monitor registrations for any suspicious activity

## 📞 Support

If you need help with setup:
- Check the Google Apps Script documentation
- Test with sample data first
- Contact Google Workspace support if needed

## 🎯 Next Steps

After setup:
1. Test the form thoroughly
2. Customize email templates if needed
3. Set up data analysis in Google Sheets
4. Create automated follow-up workflows

Your registration system is now ready to collect and manage student registrations for the Studycircle Summer Program!
