---
to: <%= absPath %>/<%= component_name %>.module.css
---
/* * THis is styles for <%= component_name %> */

.<%= lower_name %> {
  display: block;
}

.<%= lower_name %>_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.container {
  border: 1px solid lawngreen;
}
