# QDraggableTree

QDraggableTree is a [Quasar App Extension](https://quasar.dev/app-extensions/introduction). It is a component that displays hierarchical data

with drag and drop ability.

## Install

To add this App Extension to your Quasar application, run the following (in your Quasar app folder):

```bash
quasar ext add qdraggabletree
```

# Uninstall
To remove this App Extension from your Quasar application, run the following (in your Quasar app folder):

```
quasar ext remove qdraggabletree
```

# Defining the data



        [
            {
                id: 1,
                label: 'Satisfied customers',
                children: [
                    {
                        id: 2,
                        label: 'Good food',
                        children: [
                            {
                                id: 3,
                                label: 'Quality ingredients',
                                children: [],
                            },
                            {
                                id: 4,
                                label: 'Good recipe',
                                children: [],
                            }
                        ]
                    },
                    {
                        id: 5,
                        label: 'Good service',
                        children: [
                            {id: 6, label: 'Prompt attention', children: [],},
                            {id: 7, label: 'Professional waiter', children: [],},
                        ]
                    },
                    {
                        id: 8,
                        label: 'Pleasant surroundings',
                        children: [
                            {id: 9, label: 'Happy atmosphere', children: [],},
                            {id: 10, label: 'Good table presentation', children: [],},
                            {id: 11, label: 'Pleasing decor', children: [],}
                        ]
                    }
                ]
            }
        ]

# Source

can be found [here](https://github.com/mayank091193/quasar-draggable-tree).

# Docs

can be found [here](https://quasar-draggable-tree.netlify.com).

# Examples

can be found [here](https://quasar-draggable-tree.netlify.com/examples).

# Demo Project.

can be found [here](https://github.com/mayank091193/quasar-draggable-tree/tree/master/demo).

# Roadmap

Default Expansion
