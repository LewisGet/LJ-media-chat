## Get start

### Send some else message

```js
window.chat(true, "name", "image_src", "content_send");
```

### Send own message

```js
window.chat(false, "name", "image_src", "content_send");
```

### Join someone in message

```js
window.join_chat("name", "image_src");
```

### Set title

```js
window.init_chat_room("name", "image_src", "subtitle");
```

### Join batch

```js
window.join_chat_list([
    ["name", "path"],
    ["name", "path"],
    ["name", "path"]
]);
```

### Join batch with same basic path

```js
window.join_chat_list_auto_img(
    "./img/{{__PATH__}}.jpg",
    ["name1", "name2", "name3"]
);
```

### Display system message

```js
window.write_system_message("hello world");

// with background
window.write_system_message("hello world", "#fff");

// with background and text color
window.write_system_message("hello world", "#000", "#fff");
```

---

### Send Text with image alias

```html
some text {img:IMAGE_PATH} some text
```

#### It will return

```html
some text <img src="IMAGE_PATH" style="max-width:200px" /> some text
```

#### It also work

```html
some text {img:IMAGE_PATH||size:IMAGE_MAX_SIZE} some text
```

#### It will return

```html
some text <img src="IMAGE_PATH" style="max-width:IMAGE_MAX_SIZE" /> some text
```
