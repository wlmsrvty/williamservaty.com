import { FaGithub } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { FaLink } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

/*
className="flex items-center text-xs font-medium px-2 py-0.5 rounded border-[#00AED8] border dark:text-cyan-100 dark:bg-cyan-950 dark:hover:border-cyan-400"
*/

function Tags({ tags }: { tags: string[] }) {
  return (
    <>
      {tags.map((tag) => (
        <div
          key={tag}
          className="flex text-nowrap items-center text-xs font-medium px-2 py-0.5 rounded border dark:border-neutral-500 dark:text-neutral-200 bg-neutral-200 border-neutral-300 dark:bg-neutral-950 dark:hover:border-neutral-600 hover:border-neutral-400"
        >
          {tag}
        </div>
      ))}
    </>
  );
}

export default function Project({
  title,
  description,
  tags,
  link,
  date,
}: {
  title?: React.ReactNode;
  description?: React.ReactNode;
  tags?: string[];
  link?: string;
  date?: string;
}) {
  return (
    <div
      className="flex sm:w-80 rounded-md border shadow-lg dark:shadow-neutral-800/50 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-neutral-500
    hover:border-neutral-400"
    >
      <div className="flex grow flex-col justify-between">
        <div className="flex flex-col pt-2 px-3">
          <h2 className="font-semibold">
            {title}
            {
                date && 
            <p className="float-right font-normal text-xs text-neutral-500 pt-1">{date}</p>
            }
          </h2>
          <p className="dark:text-gray-300 text-sm">{description}</p>
        </div>
        <div className="flex justify-between gap-x-1 px-3 pb-2 pt-1">
          <div className="flex justify-start items-center gap-x-1.5 flex-wrap gap-y-1.5">
            {tags && <Tags tags={tags} />}
          </div>
          <div className="z-10 flex text-sm flex-row gap-x-1 items-center justify-end">
            {link && (
              <a href={link} target="_blank">
                <div className="flex items-center gap-x-1">
                  <FaGithub />
                  <p>github</p>
                  <GoArrowUpRight className="text-neutral-500" />
                </div>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
