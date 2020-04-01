# QDraggableTree

QDraggableTree is a [Quasar App Extension](https://quasar.dev/app-extensions/introduction).  It is a component that displays hierarchical data with drag and drop ability.

# Support

If this helped you, you can contribute to this project by supporting me:

### [💜 Support my open-source work on GitHub](https://github.com/sponsors/mayank091193)

Please check out my sponsor page.

(GitHub currently **doubles your support**! So if you support me with $5/mo, I will get $10 instead! 😉)

Thank you very much!!

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
                            },
                            {
                                id: 4,
                                label: 'Good recipe',
                            }
                        ]
                    },
                    {
                        id: 5,
                        label: 'Good service',
                        children: [
                            {id: 6, label: 'Prompt attention'},
                            {id: 7, label: 'Professional waiter'}
                        ]
                    },
                    {
                        id: 8,
                        label: 'Pleasant surroundings',
                        children: [
                            {id: 9, label: 'Happy atmosphere'},
                            {id: 10, label: 'Good table presentation'},
                            {id: 11, label: 'Pleasing decor'}
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
