self.__BUILD_MANIFEST = {
  "__rewrites": {
    "afterFiles": [
      {
        "source": "/consume/static/:path*"
      },
      {
        "source": "/consume/:path*"
      },
      {
        "source": "/consume/decide"
      }
    ],
    "beforeFiles": [
      {
        "has": [
          {
            "type": "header",
            "key": "next-url",
            "value": "/projects/(?<nxtPprojectId>[^/]+?)(?:/.*)?"
          }
        ],
        "source": "/projects/:nxtPprojectId/apps/:nxtPappId",
        "destination": "/projects/:nxtPprojectId/(.)apps/:nxtPappId"
      }
    ],
    "fallback": []
  },
  "sortedPages": [
    "/_app",
    "/_error"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()