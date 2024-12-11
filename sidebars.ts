import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  sigobdiagSidebar: [
    'sig/obdiag/sig_intro',
    'sig/obdiag/sig_members',
    'sig/obdiag/join_us',
    'sig/obdiag/intro',
    'sig/obdiag/meeting',
    'sig/obdiag/other'
  ],
  sigartificial_intelligenceSidebar: [
    'sig/AI/sig_intro',
    'sig/AI/sig_members',
    'sig/AI/join_us',
    'sig/AI/intro',
    'sig/AI/meeting',
    'sig/AI/other'
  ],
  sigcloud_nativeSidebar: [
    'sig/cloud-native/sig_intro',
    'sig/cloud-native/sig_members',
    'sig/cloud-native/join_us',
    'sig/cloud-native/intro',
    'sig/cloud-native/meeting',
    'sig/cloud-native/other'
  ],
  sigcompilationSidebar: [
    'sig/compilation/sig_intro',
    'sig/compilation/sig_members',
    'sig/compilation/join_us',
    'sig/compilation/intro',
    'sig/compilation/meeting',
    'sig/compilation/other'
  ],
  sigdevelop_toolsSidebar: [
    'sig/develop-tools/sig_intro',
    'sig/develop-tools/sig_members',
    'sig/develop-tools/join_us',
    'sig/develop-tools/intro',
    'sig/develop-tools/meeting',
    'sig/develop-tools/other'
  ],
  sigminiobSidebar: [
    'sig/miniob/sig_intro',
    'sig/miniob/sig_members',
    'sig/miniob/join_us',
    'sig/miniob/intro',
    'sig/miniob/meeting',
    'sig/miniob/other'
  ],
  sigoperation_managementSidebar: [
    'sig/operation/sig_intro',
    'sig/operation/sig_members',
    'sig/operation/join_us',
    'sig/operation/intro',
    'sig/operation/meeting',
    'sig/operation/other'
  ],
  quick_starts_and_hands_on_practices_in_englishSidebar: [
    {
      type: 'category',
      label: 'Overview of the Oceanbase database',
      items: [{
        type: 'autogenerated',
        dirName: 'user_manual/quick_starts_and_hands_on_practices_in_english/chapter_01_overview_of_the_oceanbase_database'
      }]
    },
    {
      type: 'category',
      label: 'Deploy Oceanbase database',
      items: [{
        type: 'autogenerated',
        dirName: 'user_manual/quick_starts_and_hands_on_practices_in_english/chapter_02_deploy_oceanbase_database'
      }]
    },
    {
      type: 'category',
      label: 'Test Oceanbase database',
      items: [{
        type: 'autogenerated',
        dirName: 'user_manual/quick_starts_and_hands_on_practices_in_english/chapter_03_test_oceanbase_database'
      }]
    },
    {
      type: 'category',
      label: 'Migrate and synchronize data',
      items: [{
        type: 'autogenerated',
        dirName: 'user_manual/quick_starts_and_hands_on_practices_in_english/chapter_04_migration_and_synchronization_oceanbase'
      }]
    },
    {
      type: 'category',
      label: 'Operation and maintenance',
      items: [{
        type: 'autogenerated',
        dirName: 'user_manual/quick_starts_and_hands_on_practices_in_english/chapter_05_operation_and_maintenance'
      }]
    },
    {
      type: 'category',
      label: 'Using Oceanbase for business development',
      items: [{
        type: 'autogenerated',
        dirName: 'user_manual/quick_starts_and_hands_on_practices_in_english/chapter_06_using_ob_for_business_development'
      }]
    },
    {
      type: 'category',
      label: 'Diagnosis_and_tuning',
      items: [{
        type: 'autogenerated',
        dirName: 'user_manual/quick_starts_and_hands_on_practices_in_english/chapter_07_diagnosis_and_tuning'
      }]
    },
  ],
  operation_and_maintenanceSidebar: [
    {
      type: 'category',
      label: '关于 《DBA 进阶教程》',
      items: [{
        type: 'autogenerated',
        dirName: 'user_manual/operation_and_maintenance/about_this_manual'
      }]
    },
    {
      type: 'category',
      label: '容灾架构设计',
      items: [{
        type: 'autogenerated',
        dirName: 'user_manual/operation_and_maintenance/disaster_recovery_architecture_design'
      }]
    },
    {
      type: 'category',
      label: '运维管理',
      items: [{
        type: 'autogenerated',
        dirName: 'user_manual/operation_and_maintenance/operations_and_maintenance'
      }]
    },
    {
      type: 'category',
      label: '场景最佳实践',
      items: [{
        type: 'autogenerated',
        dirName: 'user_manual/operation_and_maintenance/scenario_best_practices'
      }]
    },
    {
      type: 'category',
      label: '数据库开发规范',
      items: [{
        type: 'autogenerated',
        dirName: 'user_manual/operation_and_maintenance/development_specification'
      }]
    },
    {
      type: 'category',
      label: '故障应急手册',
      items: [{
        type: 'autogenerated',
        dirName: 'user_manual/operation_and_maintenance/emergency_handbook'
      }]
    },
    {
      type: 'category',
      label: '社区版工具问题排查手册',
      items: [{
        type: 'autogenerated',
        dirName: 'user_manual/operation_and_maintenance/tool_emergency_handbook'
      }]
    },
  ],
  tutorialSidebar: [{ type: 'autogenerated', dirName: 'user_manual/user_best_practices/tutorial' }],
  blogsSidebar: [{ type: 'autogenerated', dirName: 'blogs' }],
  legacySidebar: [
    {
      type: 'category',
      label: 'About OceanBase',
      items: [{
        type: 'autogenerated',
        dirName: 'user_manual/user_best_practices/about_oceanbase'
      }],
    },
    {
      type: 'category',
      label: 'Deploy Oceanbase',
      items: [{
        type: 'autogenerated',
        dirName: 'user_manual/user_best_practices/deploy_oceanbase',
      }]
    },
    {
      type: 'category',
      label: 'Deploy Tools',
      items: [{
        type: 'autogenerated',
        dirName: 'user_manual/user_best_practices/deploy_tools',
      }]
    },
    {
      type: 'category',
      label: 'Data Migration',
      items: [{
        type: 'autogenerated',
        dirName: 'user_manual/user_best_practices/data_migration',
      }]
    },
    {
      type: 'category',
      label: 'Operation Maintenance',
      items: [{
        type: 'autogenerated',
        dirName: 'user_manual/user_best_practices/operation_maintenance',
      }]
    },
    {
      type: 'category',
      label: 'Performance Tuning',
      items: [{
        type: 'autogenerated',
        dirName: 'user_manual/user_best_practices/performance_tuning',
      }]
    },
    {
      type: 'category',
      label: 'Trouble Shooting',
      items: [{
        type: 'autogenerated',
        dirName: 'user_manual/user_best_practices/trouble_shooting',
      }]
    },
    {
      type: 'category',
      label: 'Development Practice',
      items: [{
        type: 'autogenerated',
        dirName: 'user_manual/user_best_practices/development_practice',
      }]
    },
    {
      type: 'category',
      label: 'Solutions',
      items: [{
        type: 'autogenerated',
        dirName: 'user_manual/user_best_practices/solutions',
      }]
    },
    {
      type: 'category',
      label: 'FAQ',
      items: [{
        type: 'autogenerated',
        dirName: 'user_manual/user_best_practices/FAQ',
      }]
    },
    {
      type: 'category',
      label: 'Appendix',
      items: [{
        type: 'autogenerated',
        dirName: 'user_manual/user_best_practices/appendix',
      }]
    },
  ]
}

export default sidebars

