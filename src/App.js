import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import AddItems from './components/AddItems';
import SearchItem from './components/SearchItem';
import { useState, useRef } from 'react';
function App() {
  const inputRef = useRef();
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('shoppingList'))
  );

  const [search, setSearch] = useState('');
  const [newItem, setNewItem] = useState('');

  const saveItems = (newItem) => {
    setItems(newItem);
    localStorage.setItem('shoppingList', JSON.stringify(newItem));
  };
  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    saveItems(listItems);
  };
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    saveItems(listItems);
  };
  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const newItem = { id, checked: false, item };
    const listItems = [...items, newItem];
    saveItems(listItems);
  };

  const handleItemSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');
  };

  return (
    <div className="App">
      <Header title="NoteList" />

      <AddItems
        handleItemSubmit={handleItemSubmit}
        newItem={newItem}
        setNewItem={setNewItem}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <Content
        items={items.filter((i) =>
          i.item.toLowerCase().includes(search.toLowerCase())
        )}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
