import { Badge, badgeVariants } from '@/components/ui/badge';
import { HeartFilledIcon, RocketIcon, StarFilledIcon } from '@radix-ui/react-icons';
import type { TTag } from '@/hooks/infrastructure/tag/use-tag-find-many';
import { cn } from '@/lib/utils';

const badgeCustomerTagTypes = {
    'icon-deli': {
        Icon: HeartFilledIcon,
        variant: 'cartoon'
    },
    'icon-promo': {
        Icon: RocketIcon,
        variant: 'cartoon'
    },
    'icon-new': {
        Icon: StarFilledIcon,
        variant: 'cartoon'
    }
}

export type TBadgeCustomerTagProps = {
    className?: string;
} & Omit<TTag, 'id'>

export function BadgeCustomerTag({ icon, name, className }: TBadgeCustomerTagProps) {
    const { Icon, variant } = badgeCustomerTagTypes[icon as keyof typeof badgeCustomerTagTypes];
    return (
        <Badge variant={variant as keyof typeof badgeVariants} className={cn('text-sm font-normal',className)}>
            <Icon className='mr-1' /> {name}
        </Badge>
    );
}
