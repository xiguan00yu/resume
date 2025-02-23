import React from 'react';
import { LangSwitcher } from '@/components/LangSwitcher';
import { getMode, useModeSwitcher } from '@/hooks/useModeSwitcher';
import { getSearchObj } from '@/helpers/location';
import { getLocale } from '@/locale';
import './header.less';

const Header: React.FC = () => {
  const i18n = getLocale();
  const mode = getMode();
  const [ModeSwitcher] = useModeSwitcher({});

  function gotoOnlineVersion() {
    const query = getSearchObj();
    if (typeof window !== 'undefined') {
      window.open(
        `https://xiguan00yu.github.io/resume/?user=${
          query.user || 'xiguan00yu'
        }`
      );
    }
  }

  return (
    <header>
      <span />
      <span>
        {ModeSwitcher}
        {mode === 'read' && (
          <span className={'action-link'} onClick={() => window.print()}>
            {i18n.get('下载 PDF')}
          </span>
        )}
        <span className={'action-link'} onClick={gotoOnlineVersion}>
          在线版本
        </span>
        <LangSwitcher />
      </span>
    </header>
  );
};

export default Header;
