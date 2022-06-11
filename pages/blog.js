import MaterialTable from "material-table";
import MaterialTableNext from "material-table-next";
import { Chip } from "@mui/material";

const headCells = [
  {
    id: "id",
    numeric: false,
    disablePadding: false,
    label: "id",
  },
  {
    id: "lastname",
    numeric: false,
    disablePadding: false,
    label: "姓",
  },
  {
    id: "firstname",
    numeric: false,
    disablePadding: false,
    label: "名",
  },
  {
    id: "age",
    numeric: false,
    disablePadding: false,
    label: "年齢",
    onRender: (data) => {
      return <Chip label={data?.age} />;
    },
  },
];

function Blog({ posts }) {
    return (
      <ul>
        {posts.map((post) => (
          <li key={post.id}>氏名：{post.lastname} {post.firstname} 年齢：{post.age}</li>
        ))}
        <div>
        <h1>material-table Demo</h1>
          <MaterialTable
            title={"従業員一覧"}
            style={{ 
              width: '50%',
              padding: '0 8px'
            }}
            columns={[
              {
                title: 'id', field: 'id',
                cellStyle: {
                  backgroundColor: '#039be5',
                  color: '#FFF',
                },
                headerStyle: {
                  backgroundColor: '#039be5',
                },
                width: '20px'
              },
              { title: '姓', field: 'lastname',  width: '200px'},
              { title: '名', field: 'firstname', width: '200px'},
              { title: '年齢', field: 'age', width: '70px' },
            ]}
            data={posts}
            options={{
              search: false,
              paging: false,
              tableLayout: "fixed",
              headerStyle: {
                backgroundColor: '#01579b',
                color: '#FFF'
              },
            }}
          />
        </div>
        <div>
          <h1>material-table-next Demo</h1>
          <MaterialTableNext
            title={"従業員一覧"}
            searchKeys={["id","lastname","firstname"]}
            rows={posts}
            headCells={headCells}
            // loading={true}
            onDelete={(data) => {
              console.log("data", data);
            }}
            onEdit={(data) => {
              console.log(data);
            }}
          />
        </div>
      </ul>
    )
}


// This function gets called at build time
export async function getStaticProps() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://hello-world-1-6ccgk2l43a-an.a.run.app/users')
    const posts = await res.json()

    console.log(posts)
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        posts,
      },
    }
}
  

  export default Blog