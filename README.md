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

Note: You must get these values by creating a Facebook and Google OAuth application following the Meteor OAuth documentation and using the source and callback URL as `localhost:3000`.  Please open an issue if more help is needed with this and I will possibly add this to the README later.
