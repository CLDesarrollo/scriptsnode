const { SPPull } = require('sppull');


const context = {
  siteUrl: "https://cleverleaves.sharepoint.com/sites/intranet-it",
  creds: {
    username: process.env.USERSP,
    password: process.env.PASSSP,
    online: true
  }
};

const options = {
  spRootFolder: "documentos/",
  dlRootFolder: "/var/www/html/homologar"
};

/*
 * All files will be downloaded from http://contoso.sharepoint.com/subsite/Shared%20Documents/Contracts folder
 * to __dirname + /Downloads/Contracts folder.
 * Folders structure will remain original as it is in SharePoint's target folder.
*/
SPPull.download(context, options)
  .then((downloadResults) => {
    console.log("Files are downloaded");
    console.log("For more, please check the results", JSON.stringify(downloadResults));
  })
  .catch((err) => {
    console.log("Core error has happened", err);
  });