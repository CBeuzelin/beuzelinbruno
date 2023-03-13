export default interface INavTab {
  label: string;
  link?: string;
  subTabs?: INavTab[];
}
