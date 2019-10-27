# Project 3

Web Programming with Python and JavaScript

The site contains six pages: Index, Orders, About, Profile, Register and Login. Registration process is handled by Django CRISPY forms. Navigation to pages is integrated both in header and pizza-alike round menu. 

Django app "users" handles the registration/login/profile-update parts.

For orders, there is "orders" app that handles adding items from the menu to shopping Cart and further storing data in db.

Db in use is SQLite

Round menu on the page center is formed of four "slices" that navigate through the menu items, revealing adequate lists.

order section is divided in three parts.

Left part contains four lists stacked one on top of the other. Their appearance is handled by JS and they are shown as a result of a click event.

Right part is a shopping Cart that receives inputs from clicking events of the left side menu storing them as list items and sums their price. Out of all items on the right side JSON file is formed and on submit transferred to JSON field in db.

Middle part is for round navigation and contains four elements with synchronized animated gifs.





