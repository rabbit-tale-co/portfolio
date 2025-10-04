# Patrons & Sponsors Setup Guide

This guide will help you set up real data integration for GitHub Sponsors and Patreon supporters on your patrons page.

## GitHub Sponsors Setup

### 1. Create a GitHub Personal Access Token

1. Go to [GitHub Settings > Developer settings > Personal access tokens > Tokens (classic)](https://github.com/settings/tokens)
2. Click "Generate new token (classic)"
3. Give it a descriptive name like "Portfolio Sponsors API"
4. Select the following scopes:
   - `read:user` - Read user profile data
   - `read:org` - Read organization data (if you have sponsors through an org)
   - `user:email` - Access user email (for sponsor information)

### 2. Add the Token to Your Environment

Add your GitHub token to the `.env` file:
```env
GITHUB_TOKEN=ghp_your_actual_token_here
```

### 3. Update Your Username

In `app/patrons/page.tsx`, update the GitHub username:
```typescript
fetchGitHubSponsors('your-github-username'), // Replace with your actual username
```

## Patreon Setup

### 1. Create a Patreon Application

1. Go to [Patreon Developer Portal](https://www.patreon.com/portal/registration/register-clients)
2. Create a new client application
3. Note down your Client ID and Client Secret

### 2. Get Your Campaign ID

1. Go to your Patreon creator page
2. The campaign ID is in the URL: `https://www.patreon.com/user?u=CAMPAIGN_ID`
3. Or use the API: `https://www.patreon.com/api/oauth2/v2/campaigns`

### 3. OAuth Flow (Advanced)

For production use, you'll need to implement OAuth flow:

1. **Authorization URL:**
   ```
   https://www.patreon.com/oauth2/authorize?response_type=code&client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&scope=identity%20campaigns%20campaigns.members
   ```

2. **Token Exchange:**
   ```bash
   curl -X POST https://www.patreon.com/api/oauth2/token \
     -d "grant_type=authorization_code" \
     -d "code=CODE_FROM_CALLBACK" \
     -d "client_id=YOUR_CLIENT_ID" \
     -d "client_secret=YOUR_CLIENT_SECRET" \
     -d "redirect_uri=YOUR_REDIRECT_URI"
   ```

### 4. Add Tokens to Environment

Add your Patreon credentials to the `.env` file:
```env
PATREON_ACCESS_TOKEN=your_access_token_here
PATREON_CAMPAIGN_ID=your_campaign_id_here
```

## Testing the Integration

1. **Without tokens:** The page will show empty states with nice UI
2. **With GitHub token only:** GitHub sponsors will load, Patreon will show empty state
3. **With both tokens:** Both sections will show real data

## API Rate Limits

- **GitHub:** 5,000 requests per hour for authenticated requests
- **Patreon:** 1,000 requests per hour per application

## Security Notes

- Never commit your actual tokens to version control
- Use environment variables for all sensitive data
- Consider using GitHub Actions secrets for deployment
- Rotate tokens periodically for security

## Troubleshooting

### GitHub Issues
- **403 Forbidden:** Check token permissions and scopes
- **404 Not Found:** Verify username is correct
- **Empty sponsors:** Make sure you have active sponsors

### Patreon Issues
- **401 Unauthorized:** Check access token validity
- **403 Forbidden:** Verify campaign access permissions
- **Empty supporters:** Ensure campaign ID is correct

## Current Implementation Status

✅ **GitHub Sponsors:** Ready for production with proper token
✅ **Patreon:** Structure ready, needs OAuth implementation for production
✅ **Empty States:** Properly implemented for both platforms
✅ **Error Handling:** Graceful fallbacks implemented

The current Patreon integration returns empty data until you implement the full OAuth flow and API calls.