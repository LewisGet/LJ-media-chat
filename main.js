window.content_list = document.getElementById("content_list");
window.people_list = document.getElementById("peoples_list");

window.chat = function (not_own, name, img, content) {
    var call_function = (not_own) ? window.other_message : window.own_message;

	window.content_list.innerHTML += call_function(name, img, content);
};

window.join_chat = function (name, img) {
    window.people_list.innerHTML += window.chat_people(name, img);
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
