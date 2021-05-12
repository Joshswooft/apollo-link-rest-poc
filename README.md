# Apollo link REST proof of concept

This is a proof of concept to show how you would integrate some REST endpoints when you are already using a graphql API on the front-end. 

## Why would you need to do this?

Say your backend is primarily graphQL but with the odd REST endpoints, maybe these come from 3rd parties or you simply don't have the time to convert them to graphQL but your Front-End team require that data. 

This method would allow your backend team to do the migration in their own time meanwhile the front-end team can proceed with consuming this data.