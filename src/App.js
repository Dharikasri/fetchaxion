import React from 'react';
import CustomerList from './components/CustomerList';
import CategoryList from './components/CategoryList';
import OrderList from './components/OrderList';
import ProductList from './components/ProductList'; // Import the ProductList component

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>Welcome to My Management App</h1>
      </header>
      <main>
        <section>
          <CustomerList />
        </section>
        <section>
          <CategoryList />
        </section>
        <section>
          <OrderList />
        </section>
        <section>
          <ProductList /> {/* Add the ProductList component */}
        </section>
      </main>
      <footer>
        <p>© {new Date().getFullYear()} Your Company</p>
      </footer>
    </div>
  );
};

export default App;
