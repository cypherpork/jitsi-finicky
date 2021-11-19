module.exports = {
  defaultBrowser: "Firefox",
	handlers: [
		{
            match: ({ url }) => url.host.includes("jitsi.example.com") || url.host.includes("meet.jit.si") ,
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