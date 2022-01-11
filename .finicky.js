    module.exports = 
    {
      defaultBrowser: "your-favorite-browser-CHANGEME",
      handlers: [
		{
                  match: ({ url }) => url.host.includes("jitsi.your-selfhosted-server.CHANGEME") || 
                                                                url.host.includes("meet.jit.si") ,
			      url({ url }) {
					  return {
					  		          ...url,
						              protocol: "jitsi-meet", 
						              host: url.host, 
						              pathname: url.pathname
					            };
			                     },
			       browser: "/Applications/Jitsi\ Meet.app"
                }		
	        ]
    };
