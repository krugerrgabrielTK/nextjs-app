export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          id: "1",
        },
      },
      {
        params: {
          id: "2",
        },
      },
      {
        params: {
          id: "3",
        },
      },
    ],
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  return {
    props: {
      id: id,
    },
  };
}

const Produtos = (props) => {
  const { id } = props;

  return (
    <>
      <span>{id}</span>
    </>
  );
};

export default Produtos;
