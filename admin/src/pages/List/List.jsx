import { useEffect, useState } from 'react';
import './List.css';
import { url, currency } from '../../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const List = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchList = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${url}/api/food/list`);
      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error('Failed to fetch food list');
      }
    } catch (error) {
      toast.error('Error fetching food list');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const removeFood = async (foodId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this item?");
    if (!confirmDelete) return;

    try {
      const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
      if (response.data.success) {
        toast.success(response.data.message);
        fetchList(); // Refresh list
      } else {
        toast.error(response.data.message || 'Failed to delete item.');
      }
    } catch (error) {
      toast.error('Error deleting food item');
      console.error(error);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="list add flex-col">
      <p>All Foods List</p>

      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>

        {loading ? (
          <p style={{ padding: '1rem' }}>Loading...</p>
        ) : list.length === 0 ? (
          <p style={{ padding: '1rem' }}>No items found.</p>
        ) : (
          list.map((item) => (
            <div key={item._id} className="list-table-format">
              <img src={`${url}/images/${item.image}`} alt={item.name} />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{currency}{item.price}</p>
              <p className="cursor" onClick={() => removeFood(item._id)}>❌</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default List;
