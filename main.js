window.content_list = document.getElementById("content_list");
window.people_list = document.getElementById("peoples_list");

window.chat = function (not_own, name, img, content) {
    var call_function = (not_own) ? window.other_message : window.own_message;

	window.content_list.innerHTML += call_function(name, img, content);
};

window.join_chat = function (name, img) {
    window.people_list.innerHTML += window.chat_people(name, img);
};

window.join_chat_list = function (lists) {
    for (var i = 0; i < lists.length; i++)
    {
        var row = lists[i];

        window.join_chat(row[0], row[1]);
    }
};

window.join_chat_list_auto_img = function (basic_path, lists) {
    for (var i = 0; i < lists.length; i++)
    {
        var name = lists[i];
        var path = basic_path.replace("{{__PATH__}}", name);

        window.join_chat(name, path);
    }
};

window.init_chat_room = function (name, image, subtitle) {
    var title = document.getElementById("chat_title");

    var name_dom = title.getElementsByTagName("h1")[0];
    var img_dom = title.getElementsByTagName("img")[0];
    var subtitle_dom = title.getElementsByTagName("h2")[0];

    name_dom.innerHTML = name;
    img_dom.setAttribute("src", image);
    subtitle_dom.innerHTML = subtitle;
};

window.chat_box = function () {
    window.enable_name = null;
    window.enable_image = null;

    this.init_click_people = function () {
        window.people_list.onclick = function (e) {
            var li_dom = e.target.parentElement;

            window.enable_name = li_dom.getElementsByTagName("h1")[0].innerHTML;
            window.enable_image = li_dom.getElementsByTagName("img")[0].getAttribute("src");
        };
    };

    this.send_message = function () {
        document.getElementById("send_message").onclick = function () {
            window.chat(
                (window.enable_name !== "me"),
                window.enable_name,
                window.enable_image,
                document.getElementById("message_content").value
            );
        };
    };

    this.init_click_people();
    this.send_message();
};

window.chat_box_object = new window.chat_box();
