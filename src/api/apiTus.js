import * as tus from "tus-js-client";
import { SERVERURL } from "./server";

// let upload; // برای pause / resume

// export function uploadVideoWithTus({ file, jwtToken, onProgress }) {
//   return new Promise((resolve, reject) => {
//     upload = new tus.Upload(file, {
//       endpoint: SERVERURL + "uploads",
//       retryDelays: [0, 3000, 5000, 10000],
//       headers: {
//         Authorization: jwtToken,
//       },
//       metadata: {
//         filename: file.name,
//         filetype: file.type,
//       },

//       onProgress: (bytesUploaded, bytesTotal) => {
//         const percent = ((bytesUploaded / bytesTotal) * 100).toFixed(2);
//         onProgress?.({
//           loaded: bytesUploaded,
//           total: bytesTotal,
//           percent,
//         });
//       },

//       onSuccess: () => {
//         console.log("✅ Upload finished:", upload.url);
//         resolve(upload.url); // 👈 اینجا برمی‌گردد
//       },

//       onError: (error) => {
//         reject(error);
//       },
//     });

//     upload.start();
//   });
// }

// export function startUpload({ cardId, file, jwtToken, onProgress, setCards }) {
//   return new Promise((resolve, reject) => {
//     upload = new tus.Upload(file, {
//       endpoint: SERVERURL + "uploads",
//       retryDelays: [0, 3000, 5000, 10000],

//       headers: {
//         Authorization: jwtToken,
//       },

//       metadata: {
//         filename: file.name,
//         filetype: file.type,
//       },

//       onProgress(bytesUploaded, bytesTotal) {
//         const percent = ((bytesUploaded / bytesTotal) * 100).toFixed(2);
//         onProgress?.({
//           loaded: bytesUploaded,
//           total: bytesTotal,
//           percent,
//         });
//         setCards((prev) =>
//           prev.map((c) => (c.id === cardId ? { ...c, progress: percent } : c))
//         );
//       },

//       onSuccess() {
//         console.log("✅ Upload finished:", upload.url);
//         resolve(upload.url);
//       },

//       onError(error) {
//         console.error("❌ Upload error:", error);
//         reject(error);
//       },
//     });

//     upload.start();

//     // ⬅️ ذخیره upload داخل کارت (برای abort / pause)
//     setCards((prev) =>
//       prev.map((c) => (c.id === cardId ? { ...c, upload } : c))
//     );
//   });
// }

// export function tusUpload({ cardId, file, jwtToken, onProgress, setCards }) {
//   return new Promise((resolve, reject) => {
//     const upload = new tus.Upload(file, {
//       endpoint: SERVERURL + "uploads",
//       retryDelays: [0, 3000, 5000, 10000],

//       headers: {
//         Authorization: jwtToken,
//       },

//       metadata: {
//         filename: file.name,
//         filetype: file.type,
//       },

//       onProgress(bytesUploaded, bytesTotal) {
//         const percent = ((bytesUploaded / bytesTotal) * 100).toFixed(2);
//         onProgress?.({
//           loaded: bytesUploaded,
//           total: bytesTotal,
//           percent,
//         });

//         if (setCards && cardId !== "main") {
//           setCards((prev) =>
//             prev.map((c) => (c.id === cardId ? { ...c, progress: percent } : c))
//           );
//         }
//       },

//       onSuccess() {
//         resolve(upload.url);
//       },

//       onError(error) {
//         reject(error);
//       },
//     });

//     upload.start();

//     // ذخیره upload فقط برای کارت‌ها
//     if (setCards && cardId !== "main") {
//       setCards((prev) =>
//         prev.map((c) => (c.id === cardId ? { ...c, upload } : c))
//       );
//     }
//   });
// }

export function tusUpload({
  id,
  file,
  jwtToken,
  uploadsRef, 
  setVideosToUpload,
  onProgress,
}) {
  console.log("tusUpload called for id:", id);

  return new Promise((resolve, reject) => {
    const upload = new tus.Upload(file, {
      endpoint: SERVERURL + "uploads",
      retryDelays: [0, 3000, 5000, 10000],

      headers: {
        Authorization: jwtToken,
      },

      metadata: {
        filename: file.name,
        filetype: file.type,
      },

      onProgress(bytesUploaded, bytesTotal) {
        const percent = Math.floor((bytesUploaded / bytesTotal) * 100);

        onProgress?.({
          loaded: bytesUploaded,
          total: bytesTotal,
          percent,
        });

        setVideosToUpload((prev) =>
          prev.map((v) =>
            v.id === id ? { ...v, progress: percent, status: "uploading" } : v
          )
        );
      },

      onSuccess() {
        console.log("✅ Upload finished for id:", id);

        // حذف instance بعد از اتمام
        uploadsRef.current.delete(id);

        setVideosToUpload((prev) =>
          prev.map((v) => (v.id === id ? { ...v, status: "done" } : v))
        );

        resolve(upload.url);
      },

      onError(error) {
        console.error("❌ Upload error for id:", id, error);
        reject(error);
      },
    });

    // 🔑 ذخیره instance در ref (نه state)
    uploadsRef.current.set(id, upload);

    console.log(
      "Upload instance stored in ref for id:",
      id,
      uploadsRef.current.get(id)
    );

    setVideosToUpload((prev) =>
      prev.map((v) => (v.id === id ? { ...v, status: "uploading" } : v))
    );

    upload.start();
  });
}
