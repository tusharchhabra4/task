import type { Schema, Struct } from '@strapi/strapi';

export interface FormsAddon extends Struct.ComponentSchema {
  collectionName: 'components_forms_addons';
  info: {
    displayName: 'Addon';
  };
  attributes: {
    description: Schema.Attribute.String;
    MonthlyPrice: Schema.Attribute.Integer;
    Order: Schema.Attribute.Integer;
    title: Schema.Attribute.String;
    YearlyPrice: Schema.Attribute.Integer;
  };
}

export interface FormsAddonStep extends Struct.ComponentSchema {
  collectionName: 'components_forms_addon_steps';
  info: {
    displayName: 'AddonStep';
  };
  attributes: {
    addons: Schema.Attribute.Component<'forms.addon', true>;
    sidebarTitle: Schema.Attribute.String;
    stepNumber: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface FormsField extends Struct.ComponentSchema {
  collectionName: 'components_forms_fields';
  info: {
    displayName: 'Field';
  };
  attributes: {
    errorMessage: Schema.Attribute.String;
    label: Schema.Attribute.String;
    maxLength: Schema.Attribute.Integer;
    minLength: Schema.Attribute.Integer;
    name: Schema.Attribute.String;
    pattern: Schema.Attribute.String;
    placeholder: Schema.Attribute.String;
    required: Schema.Attribute.Boolean;
    type: Schema.Attribute.Enumeration<
      [
        'radio',
        'checkbox',
        'select',
        'toggle',
        'hidden',
        'text',
        'email',
        'phone',
        'number',
        'textarea',
      ]
    >;
  };
}

export interface FormsNavigation extends Struct.ComponentSchema {
  collectionName: 'components_forms_navigations';
  info: {
    displayName: 'navigation';
  };
  attributes: {
    changeText: Schema.Attribute.String;
    confirmText: Schema.Attribute.String;
    nextText: Schema.Attribute.String;
    previousText: Schema.Attribute.String;
  };
}

export interface FormsPersonalStep extends Struct.ComponentSchema {
  collectionName: 'components_forms_personal_steps';
  info: {
    displayName: 'PersonalStep';
  };
  attributes: {
    fields: Schema.Attribute.Component<'forms.field', true>;
    sidebarTitle: Schema.Attribute.String;
    stepNumber: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface FormsPlan extends Struct.ComponentSchema {
  collectionName: 'components_forms_plans';
  info: {
    displayName: 'Plan';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    MonthlyPrice: Schema.Attribute.Integer;
    OfferText: Schema.Attribute.String;
    Order: Schema.Attribute.Integer;
    title: Schema.Attribute.String;
    YearlyPrice: Schema.Attribute.Integer;
  };
}

export interface FormsPlanStep extends Struct.ComponentSchema {
  collectionName: 'components_forms_plan_steps';
  info: {
    displayName: 'PlanStep';
  };
  attributes: {
    plans: Schema.Attribute.Component<'forms.plan', true>;
    showBillingToggle: Schema.Attribute.Boolean;
    sidebarTitle: Schema.Attribute.String;
    stepNumber: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface FormsStep extends Struct.ComponentSchema {
  collectionName: 'components_forms_steps';
  info: {
    displayName: 'Step';
  };
  attributes: {
    addons: Schema.Attribute.Component<'forms.addon', true>;
    fields: Schema.Attribute.Component<'forms.field', true>;
    nextButtonText: Schema.Attribute.String;
    plans: Schema.Attribute.Component<'forms.plan', true>;
    previousButtonText: Schema.Attribute.String;
    showNextButton: Schema.Attribute.Boolean;
    showPreviousButton: Schema.Attribute.Boolean;
    stepNumber: Schema.Attribute.Integer;
    stepType: Schema.Attribute.Enumeration<
      ['form', 'plans', 'addons', 'summary']
    >;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface FormsSuccess extends Struct.ComponentSchema {
  collectionName: 'components_forms_successes';
  info: {
    displayName: 'Success';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface FormsSummaryStep extends Struct.ComponentSchema {
  collectionName: 'components_forms_summary_steps';
  info: {
    displayName: 'SummaryStep';
  };
  attributes: {
    sidebarTitle: Schema.Attribute.String;
    stepNumber: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'forms.addon': FormsAddon;
      'forms.addon-step': FormsAddonStep;
      'forms.field': FormsField;
      'forms.navigation': FormsNavigation;
      'forms.personal-step': FormsPersonalStep;
      'forms.plan': FormsPlan;
      'forms.plan-step': FormsPlanStep;
      'forms.step': FormsStep;
      'forms.success': FormsSuccess;
      'forms.summary-step': FormsSummaryStep;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
