
    $(document).ready(function(){
    var data = [{
        "menu":[
                    {
                        "MenuId":1,
                        "MenuName":"About",
                        "MenuLink":"about.htm",
                        "Action":null,
                        "Controller":null,
                        "ParentID":null,
                        "SortOrder":1,
                        "ModuleId":null,
                        "Menus":{
                                }
                    },
                    {
                        "MenuId":2,
                        "MenuName":"Models",
                        "MenuLink":"models.htm",
                        "Action":null,
                        "Controller":null,
                        "ParentID":null,
                        "SortOrder":2,
                        "ModuleId":null,
                        "Menus":{
                                }
                    },
                    {
                        "MenuId":3,
                        "MenuName":"Shopping",
                        "MenuLink":"shopping.htm",
                        "Action":null,
                        "Controller":null,
                        "ParentID":null,
                        "SortOrder":3,
                        "ModuleId":null,
                        "Menus":{
                                }
                    },
                    {
                        "MenuId":4,
                        "MenuName":"Contact",
                        "MenuLink":"contact.htm",
                        "Action":null,
                        "Controller":null,
                        "ParentID":null,
                        "SortOrder":4,
                        "ModuleId":null,
                        "Menus":{
                                }
                    },
                    {
                        "MenuId":5,
                        "MenuName":"Top",
                        "MenuLink":"index.htm",
                        "Action":null,
                        "Controller":null,
                        "ParentID":null,
                        "SortOrder":5,
                        "ModuleId":null,
                        "Menus":{ 
                                }
                    }
                ]
    }];

for(var i = 0, j = data[0].menu.length; i<j; i++) {
    var root_menu = data[0].menu[i];
    if(root_menu.hasOwnProperty("MenuId")) {
        $("#menu").append("<li> <a href='" + root_menu.MenuLink + "'>" + root_menu.MenuName + "</a></li>");

        if(root_menu.hasOwnProperty("Menus") && root_menu.Menus.length > 0) {
            $("#menu").append("<li><ul id='menu_" + root_menu.MenuId + "'>");
            for(var n = 0, m = root_menu.Menus.length; n<m; n++) {
                var sub_menu = root_menu.Menus[n];
                if(sub_menu.hasOwnProperty("MenuId")) {
                    $("#menu_" + root_menu.MenuId).append("<li>" + sub_menu.MenuName + "</li>");
                }
            }
            $("#menu").append("</li></ul>");
        }
    }
}

});