# Sunnah Source

Sunnah.co is a waqf managed by the us-Sunnah Foundation to make Islamic information and resources open to the entire community.

# Steps for developers

1. Open Terminal and go to your working directory for coding projects
2. `curl https://install.meteor.com/ | sh` (unless Meteor's already installed)
3. `git clone https://github.com/ussunnah/sunnah.git` or `git clone git@github.com:ussunnah/sunnah.git`
4. `cd sunnah`
5. Configure Facebook and Google OAuth services for localhost in `local-config.json`
6. `meteor --settings local-config.json`

# Config file examples

Configuration files contain private data and are ignored from the repository.  Our gitignore for this project follows the pattern of `*-config.js` and `*-config.json` for all configuration files needed.  The only file you will need to run this locally and do development is a `local-config.json` which you will create in the root directory of this project (next to this readme) and use whenever running the application.

```
{
	"services": {
		"facebook": {
			"appId": "...",
			"secret": "..."
		},
		"google": {
			"clientId": "...",
			"secret": "..."
		}
	}
}
```

You must create the Facebook and Google logins yourself via their developer tools and replace the `...` above with the information they give you. When creating the OAuth logins both will ask for your site's address or origin URL. Since this is development on your computer and not our site you should (almost) always use `http://localhost:3000` for address or origin when Facebook or Google asks. When Google asks for your "Authorized redirect URIs" enter `http://localhost:3000/_oauth/google?close` and save.  After doing this you should have all the information needed to create your local config json file.

Facebook: https://developers.facebook.com
Google: https://console.developers.google.com

Articles and videos to help:
- https://www.meteor.com/accounts
- FB: https://www.youtube.com/watch?v=h2js_rh4A4o
- FB: https://themeteorchef.com/recipes/roll-your-own-authentication/#tmc-facebook
- G: https://www.youtube.com/watch?v=8Gk4u3zNtDk
- G: https://themeteorchef.com/recipes/roll-your-own-authentication/#tmc-google

# To Do's

1. Finish for admins at: `/quran`
2. Create for admins at: `/quran/1`
3. Create for public at `/quran` , `/quran/1` , `/quran/1/1` , `/quran/1/1-3`
4. Fix styling for `/admin/users`
5. Add additional roles for Author, Editor and Moderator.
6. Create Dashboard showing activity for creates, edits, etc.
7. Create functionality for ban user, undo edit, revisions, etc. BEFORE starting next content areas
8. Scholars: create pages and interfaces for viewing, adding and editing
9. Quotes: create pages and interfaces for viewing, adding and editing
10. Hadith: admin interface needed for managing collections
11. Hadith: create pages and interfaces for viewing, adding and editing
12. Books: admin interface needed for managing collections
13. Books: create pages and interfaces for viewing, adding and editing

etc...