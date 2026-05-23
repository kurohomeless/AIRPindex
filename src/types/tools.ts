export type Lang =
  | 'en'
  | 'id'
  | 'es'
  | 'tl'
  | 'vi'
  | 'pt-BR'
  | 'ko'
  | 'zh-TW'
  | 'zh-CN'
  | 'ja'
  | 'ar';

export type ToolTag = 'paid' | 'starred';

export type Tool = {
  name: string;
  url: string;
  extraLinks?: {
    label: string;
    url: string;
  }[];
  description?: Record<Lang, string>;
  tags?: ToolTag[];
};

export type Category = {
  id: string;
  title: Record<Lang, string>;
  note?: Record<Lang, string>;
  items: Tool[];
};
