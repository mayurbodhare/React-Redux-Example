import { useGetAccountsQuery, useAddAccountMutation, useDeleteAccountMutation, useUpdateAccountMutation } from "../api/adminSlice";

 
function Admin(  ) {
  const {data,  error, isLoading} = useGetAccountsQuery();
  const [addAccount, addResponse] = useAddAccountMutation();
  const [deleteAccount, deleteResponse] = useDeleteAccountMutation();
  const [updateAccount, updateResponse] = useUpdateAccountMutation();

  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Admin Component</b>
        </h4>
        {
          data && data.map(account  => <p> {account.id} : {account.amount} 
                  <button onClick={() => deleteAccount(account.id)}>Delete X</button>
                  <button onClick={() => updateAccount({id:account.id, amount:745})}> Update A/c</button>
          </p>)
        }
        <button onClick={() => addAccount(101, data.legth+1)}>Increment +</button>
      </div>
    </div>
  );
}

export default Admin;