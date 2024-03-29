/* eslint-disable object-shorthand */
/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-key */
/* eslint-disable react/no-array-index-key */

import './hide.css';

import { IoClose } from 'react-icons/io5';
import { Rnd } from 'react-rnd';

import useStickerStore from '../../../../stores/Stickers/OnScreenStickersStore';

export default function StickerZ({ activeTab, width, height }) {
  const stickers = useStickerStore((state) => state.stickers);
  const updateSticker = useStickerStore((state) => state.updateSticker);
  const removeSticker = useStickerStore((state) => state.removeSticker);

  const handleDrag = (e, data, index) => {
    updateSticker(index, { position: { x: data.x, y: data.y } });
  };

  const handleResizeStop = (index, e, direction, ref, delta, position) => {
    updateSticker(index, {
      ...stickers[index],
      size: {
        width: ref.style.width,
        height: ref.style.height,
      },
      ...position,
    });
  };

  const handleDelete = (index) => {
    removeSticker(index);
  };
  console.log(stickers);

  return (
    <div
      className={` absolute bg-transparent `}
      style={{
        zIndex: activeTab === 'Stickers' ? 3 : 1,
        height: height,
        width: width,
      }}
    >
      {stickers.map((sticker, index) => (
        <Rnd
          className="border border-transparent hover:border-black rnd-hover"
          key={index}
          size={{ width: sticker.width, height: sticker.height }}
          position={{ x: sticker.position.x, y: sticker.position.y }}
          onDragStop={(e, d) => {
            handleDrag(e, d, index);
          }}
          onResizeStop={(e, direction, ref, delta, position) =>
            handleResizeStop(index, e, direction, ref, delta, position)
          }
        >
          <div>
            <div
              className="bg-cover"
              style={{
                width: sticker.size.width,
                height: sticker.size.height,
                backgroundImage: `url(${sticker.url})`,
              }}
            />
            <button
              className="border border-black hide-button"
              onClick={() => handleDelete(index)}
            >
              <IoClose color="red" />
            </button>
          </div>
        </Rnd>
      ))}
    </div>
  );
}
