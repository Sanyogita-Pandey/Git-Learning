#include<stdio.h>
int main()
{
    int r = 5;
    float v = 4 * 3.14 * r * r * r / 3;
    printf("The volume is : %f",v);

    float radius , pi , volume;
    printf("\n Enter radius : ");
    scanf("%f",&radius);
    printf(" enter pi :");
    scanf("%f",&pi);
    volume = 4*(pi*radius*radius*radius)/3;
    printf(" The Volume of the sphere is :%f",volume);

    return 0;
}