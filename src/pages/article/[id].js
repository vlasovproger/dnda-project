import React from "react";
import Article from "../../components/article";
import { useRouter } from "next/router";


const ArticlePage = () => {
  const router = useRouter();
  const { id } = router.query;

  return <Article id={id} />;
};

export default ArticlePage
