# Zapier Integration for Quiz Data

## Overview
The quiz form now sends each question and answer as separate fields, making it easy to organize data in Google Sheets through Zapier.

## Form Fields Sent to Netlify

### Contact Information
- `name` - User's full name
- `email` - User's email address
- `phone` - User's phone number
- `business` - Business/practice name

### Quiz Questions (Individual Fields)
- `question_1_business_type` - What type of business do you run?
- `question_2_monthly_customers` - How many new customers per month?
- `question_3_biggest_challenge` - Biggest challenge in growing business?
- `question_4_current_marketing` - Current marketing efforts (comma-separated if multiple)
- `question_5_marketing_budget` - Monthly marketing budget
- `question_6_primary_goal` - Primary goal for next 6 months
- `question_7_contact_preference` - How they prefer to be contacted

### Metadata
- `quiz_completion_date` - ISO timestamp of completion
- `growth_score` - Calculated growth potential score (80-100%)
- `potential_increase` - Potential customer increase percentage

## Setting Up Zapier Integration

### Step 1: Create Zapier Trigger
1. In Zapier, create a new Zap
2. Choose "Netlify" as the trigger app
3. Select "New Form Submission" as the trigger event
4. Connect your Netlify account
5. Select your site and the "quiz-contact" form

### Step 2: Set Up Google Sheets Action
1. Choose "Google Sheets" as the action app
2. Select "Create Spreadsheet Row" as the action
3. Connect your Google account
4. Create or select a spreadsheet

### Step 3: Map Fields to Columns
Create these columns in your Google Sheet:

| Column | Zapier Field Mapping |
|--------|---------------------|
| A: Name | `name` |
| B: Email | `email` |
| C: Phone | `phone` |
| D: Business | `business` |
| E: Business Type | `question_1_business_type` |
| F: Monthly Customers | `question_2_monthly_customers` |
| G: Biggest Challenge | `question_3_biggest_challenge` |
| H: Current Marketing | `question_4_current_marketing` |
| I: Marketing Budget | `question_5_marketing_budget` |
| J: Primary Goal | `question_6_primary_goal` |
| K: Contact Preference | `question_7_contact_preference` |
| L: Completion Date | `quiz_completion_date` |
| M: Growth Score | `growth_score` |
| N: Potential Increase | `potential_increase` |

### Step 4: Test the Integration
1. Submit a test quiz on your website
2. Check that the data appears correctly in your Google Sheet
3. Verify all fields are populated properly

## Data Analysis Benefits

With this setup, you can easily:
- **Filter by business type** to see which industries respond most
- **Analyze budget ranges** to understand your target market
- **Track completion dates** to see submission patterns
- **Sort by growth scores** to prioritize high-potential leads
- **Group by challenges** to tailor your marketing messages
- **Segment by contact preferences** for personalized follow-up

## Example Google Sheets Formulas

### Count submissions by business type:
```
=COUNTIF(E:E,"Medical Practice")
```

### Average growth score:
```
=AVERAGE(M:M)
```

### Count high-potential leads (score > 90):
```
=COUNTIF(M:M,">90")
```

This structured approach makes your quiz data much more actionable for business analysis and lead nurturing!
