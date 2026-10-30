import { FiDownload, FiEye } from 'react-icons/fi';
import { RESUME_FILENAME, RESUME_PATH } from '../../data/config';


const btn =
  'inline-flex items-center gap-2 rounded-lg border-2 border-white px-5 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-white hover:text-slate-900';


export default function ResumeButtons({
  showView = true,
  className = 'mt-12 justify-center',
}) {
  return (
    <div className={`flex flex-wrap items-center gap-4 ${className}`}>
      {showView && (
        <a href={RESUME_PATH} target="_blank" rel="noopener noreferrer" className={btn}>
          <FiEye /> View Resume
        </a>
      )}
      <a href={RESUME_PATH} download={RESUME_FILENAME} className={btn}>
        <FiDownload /> Download Resume
      </a>
    </div>
  );
}
