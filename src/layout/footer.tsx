import React from 'react';
import { GithubFilled } from '@ant-design/icons';
import './footer.less';
import { getSearchObj } from '@/helpers/location';

const Footer: React.FC = () => {
  const user = getSearchObj().user || 'linker';

  return (
    <footer>
      <div>
        <div>
          <span className="">Build with 💻</span>
          <span className="author">
            by
            <span
              style={{ marginLeft: '4px', cursor: 'pointer' }}
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.open(`https://github.com/${user}`);
                }
              }}
            >
              {user}
            </span>
          </span>
          <span className="">/ Made with ❤️</span>
          <span className="author">
            by
            <span
              style={{ marginLeft: '4px', cursor: 'pointer' }}
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.open(`https://github.com/visiky`);
                }
              }}
            >
              visiky
            </span>
          </span>
        </div>

        <a
          href={'https://github.com/xiguan00yu/resume.git'}
          style={{ position: 'absolute', right: '8px', fontSize: '12px' }}
          target="_blank"
        >
          <GithubFilled style={{ color: '#fff', marginRight: '4px' }} />{' '}
          项目代码
        </a>
      </div>
    </footer>
  );
};

export default Footer;
