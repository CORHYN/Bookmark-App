1. Google SSO kept redirecting to localhost ? 
    by updating the url redirect by going through supabase docs
2. Syncing browser tabs ? 
    I only done tab/browser sync using tanstack suite , firstly I looked up on google on how to accomplish this within my techstack. I was pointed towards broadcast channel api from a article, after tinkering a bit i ran into the issue that the current data mutation were occuring through a server side component which doesn't have access to client side. Tinkered with cluade code and it told me to use a wrapper around the server component. After understanding how the wrapper was setup and a bit of refinement I got the tabs to sync up.
