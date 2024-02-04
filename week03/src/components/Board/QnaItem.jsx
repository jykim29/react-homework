import { convertTime } from "../../lib/utils/convertTime";

function getImageUrl(collectionName, recordId, imgArray) {
  const result = imgArray.map((filename) => {
    return `${import.meta.env.VITE_PB_API_URL}/api/files/${collectionName}/${recordId}/${filename}?thumb=0x60`;
  });
  return result;
}

export default function QnaItem({
  id: recordId,
  category,
  title,
  description,
  created,
  views,
  imgField,
}) {
  const imgUrl = getImageUrl("qAndA", recordId, imgField);
  return (
    <li className="hover:bg-gray-100 ">
      <div className="relative p-3 border-b flex flex-row justify-between gap-1">
        <div className="w-[calc(100%-70px)] flex flex-col flex-shrink-1 justify-center items-start gap-1">
          <div className="flex items-center gap-1 mb-7">
            <span className="text-label-sm p-1 leading-none bg-bluegray-600 text-white rounded">
              질의응답
            </span>
            <span className="text-label-sm p-1 leading-none bg-tertiary text-white rounded">
              {category}
            </span>
          </div>
          <a
            onClick={(e) => e.preventDefault()}
            href=""
            className="absolute top-0 left-0 w-full h-full flex-auto text-paragraph-md font-normal text-contents-content-primary"
          >
            <span
              className={`absolute top-[38px] left-3 ${
                !imgUrl[0] ? "w-[90%]" : "w-[65%]"
              } overflow-hidden whitespace-nowrap text-ellipsis`}
            >
              {title}
            </span>
          </a>
          <span className="description w-full text-paragraph-sm font-normal text-gray-600 bg-transparent overflow-hidden whitespace-nowrap text-ellipsis resize-none">
            {description.slice(0, 50)}
          </span>
          <span className="text-paragraph-sm font-normal text-gray-600">
            연희동 · {convertTime(created)} · 조회 {views} · 댓글 0
          </span>
        </div>

        {!imgField.length > 0 ? (
          ""
        ) : (
          <div className="w-[70px] min-w-[70px] flex justify-center items-center">
            <div className="w-full aspect-square overflow-hidden border border-gray-300 rounded">
              <img
                className="w-full h-full object-cover"
                src={imgUrl[0]}
                alt="썸네일"
                loading="lazy"
              />
            </div>
          </div>
        )}
      </div>
    </li>
  );
}
