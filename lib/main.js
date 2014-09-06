var panel = require("sdk/panel").Panel({
    width: 180,
    height: 180,
    contentURL: require("sdk/self").data.url("passhash.html")
});

var cm = require("sdk/context-menu");
cm.Item({
    label: "My Menu Item",
    context: cm.URLContext("*"),
    contentScriptFile: require("sdk/self").data.url("click.js"),
    onMessage: function (d) {
        panel.show();
    }
});
