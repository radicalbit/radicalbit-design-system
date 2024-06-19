Drawer list example:

```jsx
    <div>
        <DrawerList
            visible={visible}
            onClose={() => toggleVisible(false)}
            title="Drawer title"
            list={{
                columns: [
                    {
                        title: 'Name',
                        dataIndex: 'name',
                        key: 'name',
                    },
                    {
                        title: 'Age',
                        dataIndex: 'age',
                        key: 'age',
                    },
                    {
                        title: 'Address',
                        dataIndex: 'address',
                        key: 'address',
                    },
                ],
                source: [
                    {
                        key: '1',
                        name: 'Mike',
                        age: 32,
                        address: '10 Downing Street',
                    },
                    {
                        key: '2',
                        name: 'John',
                        age: 42,
                        address: '10 Downing Street',
                    },
                ],
            }}
        />
    </div>
```
