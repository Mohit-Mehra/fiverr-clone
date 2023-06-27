import axios from "axios";

const upload = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "fiverr");

  try {
    const res = await axios.post(
      "https://res.cloudinary.com/do4gugtw3/image/upload/",
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "335113255196343",
          "Access-Control-Allow-Origin":"*",
        },
      }
    );

    const { url } = res.data;
    return url;
  } catch (err) {
    console.log(err);
  }
};

export default upload;
